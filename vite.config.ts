import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig(({ command, ssrBuild }) => ({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./client/src"),
      "@shared": path.resolve(__dirname, "./shared"),
    },
  },
  build: ssrBuild ? {
    // SSR build configuration
    outDir: "dist/server",
    ssr: true,
    rollupOptions: {
      input: "client/src/entry-server.tsx",
      output: {
        format: "es"
      }
    }
  } : {
    // Client build configuration
    outDir: "dist/client",
    rollupOptions: {
      input: "client/index.html"
    }
  },
  ssr: {
    noExternal: ["react-helmet-async"]
  }
}));
