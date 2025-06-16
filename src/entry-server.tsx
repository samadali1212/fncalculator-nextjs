
import { renderToString } from 'react-dom/server';
import { StaticRouter } from "react-router-dom/server";
import { HelmetProvider } from 'react-helmet-async';
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import App from './App';

export async function render(url: string) {
  // Create a fresh query client for each request
  const queryClient = new QueryClient();
  const helmetContext = {};

  const html = renderToString(
    <HelmetProvider context={helmetContext}>
      <QueryClientProvider client={queryClient}>
        <StaticRouter location={url}>
          <App />
        </StaticRouter>
      </QueryClientProvider>
    </HelmetProvider>
  );

  return html;
}
