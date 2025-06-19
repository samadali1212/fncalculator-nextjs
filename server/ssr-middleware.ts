import fs from 'fs';
import path from 'path';
import type { Express, Request, Response, NextFunction } from "express";

export function setupSSR(app: Express, vite?: any) {
  app.use('*', async (req: Request, res: Response, next: NextFunction) => {
    const url = req.originalUrl;
    
    // Skip API routes and assets
    if (url.startsWith('/api') || 
        url.includes('.') && !url.endsWith('/') ||
        url.startsWith('/@') ||
        url.startsWith('/src/')) {
      return next();
    }

    try {
      let template: string;
      let render: any;

      if (vite) {
        // Development mode
        template = fs.readFileSync(
          path.resolve(process.cwd(), 'client/index.html'),
          'utf-8'
        );
        template = await vite.transformIndexHtml(url, template);
        
        const module = await vite.ssrLoadModule('/client/src/entry-server.tsx');
        render = module.render;
      } else {
        // Production mode
        template = fs.readFileSync(
          path.resolve(process.cwd(), 'dist/client/index.html'),
          'utf-8'
        );
        
        const module = await import('./dist/server/entry-server.js');
        render = module.render;
      }

      const { html: appHtml, helmetContext } = await render(url);
      
      // Extract head content from helmet
      const { helmet } = helmetContext as any;
      let headTags = '';
      if (helmet) {
        headTags = [
          helmet.title.toString(),
          helmet.meta.toString(),
          helmet.link.toString(),
          helmet.script.toString(),
        ].join('\n');
      }

      const html = template
        .replace('<!--ssr-outlet-->', appHtml)
        .replace('<!--ssr-head-->', headTags);

      res.status(200).set({ 'Content-Type': 'text/html' }).end(html);
    } catch (e: any) {
      if (vite) {
        vite.ssrFixStacktrace(e);
      }
      console.error('SSR Error:', e);
      next(e);
    }
  });
}
