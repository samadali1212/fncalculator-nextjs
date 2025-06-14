
import { createRoot, hydrateRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import App from './App.tsx';
import './index.css';

// Create the query client as a singleton
const queryClient = new QueryClient();

const root = document.getElementById("root")!;
const app = (
  <BrowserRouter>
    <QueryClientProvider client={queryClient}>
      <App />
    </QueryClientProvider>
  </BrowserRouter>
);

// Use hydration for SSR in production
if (import.meta.env.PROD) {
  hydrateRoot(root, app);
} else {
  createRoot(root).render(app);
}
