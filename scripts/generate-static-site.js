
const fs = require('fs');
const path = require('path');
const { JSDOM } = require('jsdom');

// Simulate a basic DOM environment
const dom = new JSDOM('<!DOCTYPE html><html><body></body></html>');
global.window = dom.window;
global.document = dom.window.document;

const siteUrl = 'https://denilagari.com';

// Generate static pages data
const generateStaticPages = () => {
  const pages = [
    { path: '/', title: 'Deni La Gari - Tanzania Traffic Offence Checker', priority: '1.0' },
    { path: '/insurance', title: 'Tanzania Insurance Checker', priority: '0.9' },
    { path: '/paye', title: 'Tanzania PAYE Calculator', priority: '0.9' },
    { path: '/blog', title: 'Deni La Gari Blog', priority: '0.8' },
    { path: '/events', title: 'Tanzania Events Calendar', priority: '0.8' },
    { path: '/about', title: 'About Deni La Gari', priority: '0.7' }
  ];

  // Add 2025 monthly pages
  const months = [
    'january', 'february', 'march', 'april', 'may', 'june',
    'july', 'august', 'september', 'october', 'november', 'december'
  ];

  months.forEach(month => {
    pages.push({
      path: `/${month}-2025`,
      title: `Tanzania Events ${month.charAt(0).toUpperCase() + month.slice(1)} 2025`,
      priority: '0.6'
    });
  });

  // Add year page
  pages.push({
    path: '/year/2025',
    title: 'Tanzania Events Calendar 2025',
    priority: '0.7'
  });

  return pages;
};

// Generate sitemap.xml
const generateSitemap = (pages) => {
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages.map(page => `  <url>
    <loc>${siteUrl}${page.path}</loc>
    <changefreq>daily</changefreq>
    <priority>${page.priority}</priority>
  </url>`).join('\n')}
</urlset>`;

  return sitemap;
};

// Main execution
const main = () => {
  try {
    const pages = generateStaticPages();
    const sitemap = generateSitemap(pages);
    
    // Write sitemap to public directory
    const publicDir = path.join(__dirname, '../public');
    if (!fs.existsSync(publicDir)) {
      fs.mkdirSync(publicDir, { recursive: true });
    }
    
    fs.writeFileSync(path.join(publicDir, 'sitemap.xml'), sitemap);
    console.log('✅ Sitemap generated successfully');
    console.log(`📄 Generated ${pages.length} pages in sitemap`);
    
  } catch (error) {
    console.error('❌ Error generating static site:', error);
    process.exit(1);
  }
};

if (require.main === module) {
  main();
}

module.exports = { generateStaticPages, generateSitemap };
