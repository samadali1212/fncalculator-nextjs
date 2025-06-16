
import { createRoot, hydrateRoot } from 'react-dom/client';
import { BrowserRouter } from "react-router-dom";
import { HelmetProvider } from 'react-helmet-async';
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import App from './App';
import './index.css';

// Create the query client
const queryClient = new QueryClient();

const container = document.getElementById("root")!;

// Check if the app was server-rendered
if (container.innerHTML) {
  // Hydrate the server-rendered content
  hydrateRoot(
    container,
    <HelmetProvider>
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </QueryClientProvider>
    </HelmetProvider>
  );
} else {
  // Client-side render if no server content
  createRoot(container).render(
    <HelmetProvider>
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </QueryClientProvider>
    </HelmetProvider>
  );
}
