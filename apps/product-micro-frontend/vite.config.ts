import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import federation from "@originjs/vite-plugin-federation";

export default defineConfig({
  plugins: [
    react(),
    federation({
      name: "productMF",
      filename: "remoteEntry.js",
      exposes: {
        "./App": "./src/App.tsx",
      },
      shared: ["react", "react-dom"],
    }),
  ],
  server: {
    port: 5176,
  },
  build: {
    target: "esnext", //  THIS FIXES TOP-LEVEL AWAIT
    modulePreload: false,
    cssCodeSplit: false,
  },
});
