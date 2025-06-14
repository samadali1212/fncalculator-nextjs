
import fs from 'node:fs'
import path from 'node:path'
import url from 'node:url'

const __dirname = path.dirname(url.fileURLToPath(import.meta.url))
const toAbsolute = (p) => path.resolve(__dirname, p)

const template = fs.readFileSync(toAbsolute('dist/index.html'), 'utf-8')
const { render } = await import('./dist/server/entry-server.js')

// Import blog data to get all blog posts
const { getAllBlogPosts } = await import('./dist/server/utils/blogData.js')

// Define all routes from App.tsx
const staticRoutes = [
  '/',
  '/about',
  '/insurance',
  '/events',
  '/blog',
  '/paye',
  '/paye/monthly',
  '/paye/yearly'
]

// Get dynamic routes
const getBlogRoutes = () => {
  try {
    const blogPosts = getAllBlogPosts()
    return blogPosts.map(post => `/blog/${post.slug}`)
  } catch (error) {
    console.warn('Could not load blog posts for prerendering:', error.message)
    return []
  }
}

// Generate sample PAYE detail routes (common income scenarios)
const getPayeDetailRoutes = () => {
  const sampleIncomes = ['300000', '500000', '800000', '1000000', '1500000']
  const routes = []
  
  sampleIncomes.forEach(income => {
    routes.push(`/paye/${income}`)
    routes.push(`/paye/monthly/${income}`)
    routes.push(`/paye/yearly/${income}`)
  })
  
  return routes
}

// Generate month-year routes for the current and next year
const getMonthYearRoutes = () => {
  const currentYear = new Date().getFullYear()
  const nextYear = currentYear + 1
  const months = [
    'january', 'february', 'march', 'april', 'may', 'june',
    'july', 'august', 'september', 'october', 'november', 'december'
  ]
  
  const routes = []
  
  // Current year and next year
  [currentYear, nextYear].forEach(year => {
    months.forEach(month => {
      routes.push(`/${month}-${year}`)
    })
    // Also add year-specific routes
    routes.push(`/year/${year}`)
  })
  
  return routes
}

// Combine all routes
const allRoutes = [
  ...staticRoutes,
  ...getBlogRoutes(),
  ...getPayeDetailRoutes(),
  ...getMonthYearRoutes()
]

// Function to ensure directory exists
const ensureDirectoryExists = (filePath) => {
  const dir = path.dirname(filePath)
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true })
  }
}

;(async () => {
  console.log(`Starting prerendering for ${allRoutes.length} routes...`)
  
  for (const url of allRoutes) {
    try {
      const appHtml = render(url)
      const html = template.replace(`<!--app-html-->`, appHtml)

      const filePath = `dist${url === '/' ? '/index' : url}.html`
      const absoluteFilePath = toAbsolute(filePath)
      
      // Ensure directory exists before writing
      ensureDirectoryExists(absoluteFilePath)
      
      fs.writeFileSync(absoluteFilePath, html)
      console.log('pre-rendered:', filePath)
    } catch (error) {
      console.error(`Failed to prerender ${url}:`, error.message)
    }
  }
  
  console.log('Prerendering completed!')
})()
