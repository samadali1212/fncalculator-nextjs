
import ReactDOMServer from 'react-dom/server';
import { StaticRouter } from 'react-router-dom/server';
import { Helmet } from 'react-helmet';
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import App from './App';

export function render(url: string) {
  const queryClient = new QueryClient();
  
  const html = ReactDOMServer.renderToString(
    <QueryClientProvider client={queryClient}>
      <StaticRouter location={url}>
        <App />
      </StaticRouter>
    </QueryClientProvider>
  );
  
  const helmet = Helmet.renderStatic();
  
  return { html, helmet };
}
