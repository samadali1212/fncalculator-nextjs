
// Performance optimization script
document.addEventListener('DOMContentLoaded', () => {
  // Add lazy loading to images outside viewport
  const images = document.querySelectorAll('img:not([loading])');
  images.forEach(img => {
    if (!img.hasAttribute('loading') && !img.classList.contains('no-lazy')) {
      img.setAttribute('loading', 'lazy');
    }
  });
  
  // Add event listeners only after DOM is ready
  const attachEvents = () => {
    // Prefetch links on hover to speed up navigation
    document.querySelectorAll('a[href^="/"]').forEach(link => {
      link.addEventListener('mouseenter', () => {
        const url = link.getAttribute('href');
        if (!url.includes('#') && !link.prefetched) {
          const prefetchLink = document.createElement('link');
          prefetchLink.rel = 'prefetch';
          prefetchLink.href = url;
          document.head.appendChild(prefetchLink);
          link.prefetched = true;
        }
      });
    });
  };
  
  // Defer non-critical event attachment
  if (window.requestIdleCallback) {
    window.requestIdleCallback(attachEvents);
  } else {
    setTimeout(attachEvents, 200);
  }
});
