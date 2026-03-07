import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig(({ mode }) => ({
  plugins: [react()],
  base: mode === "production" ? "/pentathlon-ui/" : "/",
  build: {
    outDir: mode === "production" ? "docs" : "dist",
    rollupOptions: {
      output: {
        manualChunks: {
          // Split vendor libraries into separate chunks
          "vendor-react": ["react", "react-dom", "react-router-dom"],
          "vendor-ui": ["framer-motion", "lucide-react"],
          "vendor-supabase": ["@supabase/supabase-js"],
        },
      },
    },
  },
}));
