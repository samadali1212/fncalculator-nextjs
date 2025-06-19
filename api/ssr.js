import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

export default async function handler(req, res) {
  const { url } = req;
  
  try {
    // Read the built template
    const template = fs.readFileSync(
      path.resolve(__dirname, '../dist/client/index.html'),
      'utf-8'
    );

    // For Vercel, we'll use static generation for now
    // You can implement dynamic SSR if needed
    
    res.setHeader('Content-Type', 'text/html');
    res.status(200).send(template);
  } catch (error) {
    console.error('SSR Error:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}
