// Main application logic for index page
(function () {
  let allPosts = [];
  let allTags = new Set();

  async function loadPosts() {
    try {
      const response = await fetch('posts.json');
      if (!response.ok) {
        throw new Error('Failed to load posts');
      }

      const posts = await response.json();
      allPosts = posts;

      // Extract all unique tags
      posts.forEach(post => {
        if (post.tags && Array.isArray(post.tags)) {
          post.tags.forEach(tag => allTags.add(tag));
        }
      });

      // Update search module
      if (window.searchModule) {
        window.searchModule.setPosts(allPosts);
      }

      renderTagFilters();
      renderPosts(allPosts);
    } catch (error) {
      console.error('Error loading posts:', error);
      const container = document.getElementById('posts-container');
      if (container) {
        container.innerHTML = '<p class="no-results">게시글을 불러올 수 없습니다.</p>';
      }
    }
  }

  function renderTagFilters() {
    const tagFilter = document.getElementById('tag-filter');
    if (!tagFilter) return;

    const sortedTags = Array.from(allTags).sort();
    
    const buttonsHtml = [
      '<button class="filter-btn active" data-tag="all">All</button>',
      ...sortedTags.map(tag => 
        `<button class="filter-btn" data-tag="${tag}">${tag}</button>`
      )
    ].join('');

    tagFilter.innerHTML = buttonsHtml;

    // Add event listeners
    tagFilter.querySelectorAll('.filter-btn').forEach(button => {
      button.addEventListener('click', function () {
        // Remove active class from all buttons
        tagFilter.querySelectorAll('.filter-btn').forEach(btn => 
          btn.classList.remove('active')
        );
        
        // Add active class to clicked button
        this.classList.add('active');

        // Filter posts
        if (window.searchModule) {
          const searchInput = document.getElementById('search-input');
          const query = searchInput ? searchInput.value.toLowerCase().trim() : '';
          window.searchModule.filterPosts(query);
        }
      });
    });
  }

  function renderPosts(posts) {
    if (window.searchModule) {
      window.searchModule.displayPosts(posts);
    }
  }

  // Initialize when DOM is loaded
  document.addEventListener('DOMContentLoaded', function () {
    loadPosts();
    
    if (window.searchModule) {
      window.searchModule.initSearch();
    }
  });
})();

