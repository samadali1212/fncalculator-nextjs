
import ReactDOMServer from 'react-dom/server';
import { StaticRouter } from 'react-router-dom/server';
import { HelmetProvider } from 'react-helmet-async';
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import App from './App';

export function render(url: string) {
  const queryClient = new QueryClient();
  
  const html = ReactDOMServer.renderToString(
    <StaticRouter location={url}>
      <HelmetProvider>
        <QueryClientProvider client={queryClient}>
          <App />
        </QueryClientProvider>
      </HelmetProvider>
    </StaticRouter>
  );
  
  return html;
}
