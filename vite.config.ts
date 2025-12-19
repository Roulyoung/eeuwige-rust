import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  // Use relative paths in production so assets work on GitHub Pages subfolders.
  base: mode === "production" ? "./" : "/",
  server: {
    host: true,
    port: Number(process.env.PORT) || 4173,
    strictPort: true,
  },
  preview: {
    host: true,
    port: Number(process.env.PORT) || 4173,
  },
  plugins: [react(), mode === "development" && componentTagger()].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
