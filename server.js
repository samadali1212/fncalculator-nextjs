
const fs = require('fs')
const path = require('path')
const express = require('express')
const { createServer: createViteServer } = require('vite')

async function createServer() {
  const app = express()
  const isProduction = process.env.NODE_ENV === 'production'

  let vite
  if (!isProduction) {
    // Create Vite server in middleware mode in development
    vite = await createViteServer({
      server: { middlewareMode: 'ssr' }
    })
    app.use(vite.middlewares)
  } else {
    // In production, serve static files from dist/client
    app.use(express.static(path.resolve(__dirname, 'dist/client')))
  }

  app.use('*', async (req, res, next) => {
    const url = req.originalUrl

    try {
      let template
      let render

      if (!isProduction) {
        // Development: read index.html and transform it
        template = fs.readFileSync(
          path.resolve(__dirname, 'index.html'),
          'utf-8'
        )
        template = await vite.transformIndexHtml(url, template)
        
        // Load the server entry
        const module = await vite.ssrLoadModule('/src/entry-server.tsx')
        render = module.render
      } else {
        // Production: use pre-built files
        template = fs.readFileSync(
          path.resolve(__dirname, 'dist/client/index.html'),
          'utf-8'
        )
        const serverEntry = require('./dist/server/entry-server.js')
        render = serverEntry.render
      }

      // Render the app HTML
      const appHtml = await render(url)

      // Inject the app-rendered HTML into the template
      const html = template.replace(`<!--ssr-outlet-->`, appHtml)

      // Send the rendered HTML back
      res.status(200).set({ 'Content-Type': 'text/html' }).end(html)
    } catch (e) {
      if (!isProduction) {
        vite.ssrFixStacktrace(e)
      }
      console.error(e)
      next(e)
    }
  })

  const port = process.env.PORT || 3000
  app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`)
  })
}

createServer()
