
import ReactDOMServer from 'react-dom/server';
import { StaticRouter } from 'react-router-dom/server';
import pkg from 'react-helmet-async';
const { HelmetProvider } = pkg;
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
