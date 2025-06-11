// Prerender configuration for social media crawlers
export const prerenderRoutes = [
  '/',
  '/about',
  '/insurance',
  '/events',
  // Add more routes as needed
];

// Function to update meta tags for prerendering
export const updateMetaForPrerender = (route: string) => {
  const metaConfigs: Record<string, any> = {
    '/': {
      title: 'Deni La Gari - Tanzania Traffic Offence Checker',
      description: 'Check your traffic violations and outstanding fines in Tanzania. Search using your vehicle registration, driving license, or violation reference number.',
      ogImage: '/denilagarifavicon.png'
    },
    '/about': {
      title: 'About - Deni La Gari',
      description: 'Learn more about our traffic violation checking service for Tanzania drivers.',
      ogImage: '/denilagarifavicon.png'
    },
    '/insurance': {
      title: 'Insurance Information - Deni La Gari',
      description: 'Find information about vehicle insurance requirements in Tanzania.',
      ogImage: '/denilagarifavicon.png'
    },
    '/events': {
      title: 'Events - Deni La Gari',
      description: 'Stay updated with traffic-related events and announcements in Tanzania.',
      ogImage: '/denilagarifavicon.png'
    }
  };

  const config = metaConfigs[route] || metaConfigs['/'];
  
  // Update document title
  document.title = config.title;
  
  // Update meta description
  const metaDescription = document.querySelector('meta[name="description"]');
  if (metaDescription) {
    metaDescription.setAttribute('content', config.description);
  }
  
  // Update Open Graph tags
  const ogTitle = document.querySelector('meta[property="og:title"]');
  if (ogTitle) {
    ogTitle.setAttribute('content', config.title);
  }
  
  const ogDescription = document.querySelector('meta[property="og:description"]');
  if (ogDescription) {
    ogDescription.setAttribute('content', config.description);
  }
  
  const ogImage = document.querySelector('meta[property="og:image"]');
  if (ogImage) {
    ogImage.setAttribute('content', `https://denilagari.com${config.ogImage}`);
  }
};
