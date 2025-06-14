
import fs from 'node:fs'
import path from 'node:path'
import url from 'node:url'

const __dirname = path.dirname(url.fileURLToPath(import.meta.url))
const toAbsolute = (p) => path.resolve(__dirname, p)

const template = fs.readFileSync(toAbsolute('dist/index.html'), 'utf-8')
const { render } = await import('./dist/server/entry-server.js')

// Define routes that match App.tsx exactly
const routesToPrerender = [
  '/',
  '/about',
  '/insurance',
  '/events',
  '/blog',
  '/paye',
  '/paye/monthly',
  '/paye/yearly'
]

// Helper function to ensure directory exists
const ensureDirectoryExists = (filePath) => {
  const dir = path.dirname(filePath)
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true })
  }
}

;(async () => {
  for (const url of routesToPrerender) {
    try {
      console.log(`Pre-rendering: ${url}`)
      const appHtml = render(url);
      const html = template.replace(`<!--app-html-->`, appHtml)

      const filePath = `dist${url === '/' ? '/index' : url}.html`
      const absoluteFilePath = toAbsolute(filePath)
      
      // Ensure the directory exists before writing the file
      ensureDirectoryExists(absoluteFilePath)
      
      fs.writeFileSync(absoluteFilePath, html)
      console.log('✅ Pre-rendered:', filePath)
    } catch (error) {
      console.error(`❌ Error pre-rendering ${url}:`, error)
      // Continue with other routes even if one fails
    }
  }
  console.log('🎉 Pre-rendering complete!')
})()
