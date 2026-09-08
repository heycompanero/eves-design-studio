import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

// Served from a GitHub Pages project subpath in production, from the root in dev.
// An absolute base (not './') is required because the SPA has client-side routes:
// deep links are served 404.html from a nested path, where relative asset URLs break.
export default defineConfig(({ command }) => ({
  base: command === "build" ? "/eves-design-studio/" : "/",
  server: { host: "::", port: 5195 },
  plugins: [react()],
  resolve: {
    alias: { "@": path.resolve(__dirname, "./src") },
  },
}));
