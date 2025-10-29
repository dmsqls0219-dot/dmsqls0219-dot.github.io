// Search functionality
let allPosts = [];

function initSearch() {
  const searchInput = document.getElementById('search-input');
  if (!searchInput) return;

  searchInput.addEventListener('input', function (e) {
    const query = e.target.value.toLowerCase().trim();
    filterPosts(query);
  });
}

function filterPosts(query) {
  const activeTag = document.querySelector('.filter-btn.active')?.dataset.tag || 'all';
  
  let filtered = allPosts;

  // Filter by tag
  if (activeTag !== 'all') {
    filtered = filtered.filter(post => post.tags.includes(activeTag));
  }

  // Filter by search query
  if (query) {
    filtered = filtered.filter(post => {
      const searchableText = [
        post.title,
        post.description,
        post.excerpt,
        post.category,
        ...post.tags
      ].join(' ').toLowerCase();

      return searchableText.includes(query);
    });
  }

  displayPosts(filtered);
}

function displayPosts(posts) {
  const container = document.getElementById('posts-container');
  const noResults = document.getElementById('no-results');

  if (!container) return;

  if (posts.length === 0) {
    container.innerHTML = '';
    if (noResults) noResults.style.display = 'block';
    return;
  }

  if (noResults) noResults.style.display = 'none';

  container.innerHTML = posts.map(post => {
    const tagsHtml = post.tags.map(tag => 
      `<span class="post-tag">${tag}</span>`
    ).join('');

    const categoryHtml = post.category 
      ? `<span class="post-card-category">${post.category}</span>` 
      : '';

    return `
      <article class="post-card">
        <h2 class="post-card-title">
          <a href="post.html?file=${post.file}">${post.title}</a>
        </h2>
        <div class="post-card-meta">
          <time class="post-card-date">${post.date}</time>
          ${categoryHtml}
        </div>
        ${post.excerpt ? `<p class="post-card-excerpt">${post.excerpt}</p>` : ''}
        ${tagsHtml ? `<div class="post-card-tags">${tagsHtml}</div>` : ''}
      </article>
    `;
  }).join('');
}

// Export for use in app.js
window.searchModule = {
  allPosts,
  initSearch,
  filterPosts,
  displayPosts,
  setPosts: (posts) => { allPosts = posts; }
};

