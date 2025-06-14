
const { execSync } = require('child_process');
const path = require('path');

console.log('🏗️  Starting static site build process...');

try {
  // Generate static content first
  console.log('📄 Generating static pages and sitemap...');
  execSync('node scripts/generate-static-site.js', { stdio: 'inherit' });
  
  // Build the React app
  console.log('⚛️  Building React application...');
  execSync('npm run build', { stdio: 'inherit' });
  
  console.log('✅ Static site build completed successfully!');
  
} catch (error) {
  console.error('❌ Build failed:', error.message);
  process.exit(1);
}
