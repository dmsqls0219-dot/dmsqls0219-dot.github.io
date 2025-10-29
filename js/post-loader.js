// Post loader - Markdown parsing and rendering
(function () {
  const urlParams = new URLSearchParams(window.location.search);
  const postFile = urlParams.get('file');

  if (!postFile) {
    showError();
    return;
  }

  async function loadPost() {
    try {
      const response = await fetch(`pages/${postFile}`);
      if (!response.ok) {
        throw new Error('Post not found');
      }

      const markdown = await response.text();
      const { frontMatter, content } = parseFrontMatter(markdown);
      
      renderPost(frontMatter, content);
      loadGiscus();
      
    } catch (error) {
      console.error('Error loading post:', error);
      showError();
    }
  }

  function parseFrontMatter(markdown) {
    const frontMatterRegex = /^---\n([\s\S]*?)\n---\n([\s\S]*)$/;
    const match = markdown.match(frontMatterRegex);

    if (!match) {
      return {
        frontMatter: {},
        content: markdown
      };
    }

    const frontMatterText = match[1];
    const content = match[2];
    const frontMatter = {};

    frontMatterText.split('\n').forEach(line => {
      const colonIndex = line.indexOf(':');
      if (colonIndex > 0) {
        const key = line.substring(0, colonIndex).trim();
        let value = line.substring(colonIndex + 1).trim();

        // Remove quotes
        if ((value.startsWith('"') && value.endsWith('"')) ||
            (value.startsWith("'") && value.endsWith("'"))) {
          value = value.slice(1, -1);
        }

        // Parse arrays (tags)
        if (key === 'tags' && value.startsWith('[') && value.endsWith(']')) {
          try {
            value = JSON.parse(value);
          } catch {
            value = value.slice(1, -1)
              .split(',')
              .map(tag => tag.trim().replace(/^['"]|['"]$/g, ''));
          }
        }

        frontMatter[key] = value;
      }
    });

    return { frontMatter, content };
  }

  function renderPost(frontMatter, content) {
    const postLoading = document.getElementById('post-loading');
    const postContent = document.getElementById('post-content');

    if (postLoading) postLoading.style.display = 'none';
    if (postContent) postContent.style.display = 'block';

    // Set title
    const title = frontMatter.title || 'Untitled';
    document.title = `${title} | dmsqls0219-dot's Blog`;
    
    const postTitle = document.getElementById('post-title');
    if (postTitle) postTitle.textContent = title;

    // Set date
    const postDate = document.getElementById('post-date');
    if (postDate && frontMatter.date) {
      postDate.textContent = frontMatter.date;
    }

    // Set category
    const postCategory = document.getElementById('post-category');
    if (postCategory && frontMatter.category) {
      postCategory.textContent = frontMatter.category;
    }

    // Set tags
    const postTags = document.getElementById('post-tags');
    if (postTags && frontMatter.tags && Array.isArray(frontMatter.tags)) {
      postTags.innerHTML = frontMatter.tags.map(tag => 
        `<span class="post-tag">${tag}</span>`
      ).join('');
    }

    // Render markdown content
    const postBody = document.getElementById('post-body');
    if (postBody && typeof marked !== 'undefined') {
      // Configure marked for better rendering
      marked.setOptions({
        breaks: true,
        gfm: true
      });

      postBody.innerHTML = marked.parse(content);

      // Apply syntax highlighting
      if (typeof Prism !== 'undefined') {
        Prism.highlightAllUnder(postBody);
      }

      // Add target="_blank" to external links
      postBody.querySelectorAll('a').forEach(link => {
        if (link.hostname !== window.location.hostname) {
          link.setAttribute('target', '_blank');
          link.setAttribute('rel', 'noopener noreferrer');
        }
      });
    }
  }

  function showError() {
    const postLoading = document.getElementById('post-loading');
    const postError = document.getElementById('post-error');

    if (postLoading) postLoading.style.display = 'none';
    if (postError) postError.style.display = 'block';
  }

  function loadGiscus() {
    const container = document.getElementById('giscus-container');
    if (!container) return;

    const script = document.createElement('script');
    script.src = 'https://giscus.app/client.js';
    
    // Giscus 설정
    // https://giscus.app/ko 에서 설정 정보를 가져와 아래 값을 업데이트하세요
    script.setAttribute('data-repo', 'dmsqls0219-dot/dmsqls0219-dot.github.io');
    script.setAttribute('data-repo-id', 'YOUR_REPO_ID'); // 3단계에서 복사한 Repo ID로 교체
    script.setAttribute('data-category', 'General');
    script.setAttribute('data-category-id', 'YOUR_CATEGORY_ID'); // 3단계에서 복사한 Category ID로 교체
    script.setAttribute('data-mapping', 'pathname');
    script.setAttribute('data-strict', '0');
    script.setAttribute('data-reactions-enabled', '1');
    script.setAttribute('data-emit-metadata', '1');
    script.setAttribute('data-input-position', 'bottom');
    script.setAttribute('data-theme', 'preferred_color_scheme');
    script.setAttribute('data-lang', 'ko');
    script.setAttribute('crossorigin', 'anonymous');
    script.async = true;

    container.appendChild(script);
  }

  // Initialize when DOM is loaded
  document.addEventListener('DOMContentLoaded', loadPost);
})();

