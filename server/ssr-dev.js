import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'
import express from 'express'
import { createServer as createViteServer } from 'vite'

const __dirname = path.dirname(fileURLToPath(import.meta.url))

async function createServer() {
  const app = express()

  const vite = await createViteServer({
    server: { middlewareMode: true },
    appType: 'custom'
  })

  app.use(vite.middlewares)

  app.use('*', async (req, res, next) => {
    const url = req.originalUrl

    try {
      let template = fs.readFileSync(
        path.resolve(__dirname, '../client/index.html'),
        'utf-8'
      )

      template = await vite.transformIndexHtml(url, template)

      const { render } = await vite.ssrLoadModule('/client/src/entry-server.tsx')

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
      vite.ssrFixStacktrace(e)
      next(e)
    }
  })

  app.listen(5174, () => {
    console.log('SSR dev server running at http://localhost:5174')
  })
}

createServer()
