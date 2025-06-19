import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'
import express from 'express'

const __dirname = path.dirname(fileURLToPath(import.meta.url))

async function createServer() {
  const app = express()

  app.use(express.static(path.resolve(__dirname, '../dist/client')))

  app.use('*', async (req, res, next) => {
    const url = req.originalUrl

    try {
      const template = fs.readFileSync(
        path.resolve(__dirname, '../dist/client/index.html'),
        'utf-8'
      )

      const { render } = await import('../dist/server/entry-server.js')

      const { html: appHtml, helmetContext } = await render(url)

      const { helmet } = helmetContext
      let headTags = ''
      if (helmet) {
        headTags = [
          helmet.title.toString(),
          helmet.meta.toString(),
          helmet.link.toString(),
          helmet.script.toString(),
        ].join('\n')
      }

      const html = template
        .replace('<!--ssr-outlet-->', appHtml)
        .replace('<!--ssr-head-->', headTags)

      res.status(200).set({ 'Content-Type': 'text/html' }).end(html)
    } catch (e) {
      console.error('SSR Error:', e)
      res.status(500).end('Internal Server Error')
    }
  })

  const port = process.env.PORT || 5000
  app.listen(port, () => {
    console.log(`Production SSR server running at http://localhost:${port}`)
  })
}

createServer()
