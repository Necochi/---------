import { defineConfig } from "vite";
import path from "path";
import react from "@vitejs/plugin-react";

export default defineConfig({
  build: {
    outDir: path.resolve(__dirname, "public"),
    emptyOutDir: false,
  },
  plugins: [react()],
});
