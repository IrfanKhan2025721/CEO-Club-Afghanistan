import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { VitePWA } from "vite-plugin-pwa";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: "autoUpdate",
      manifest: {
        name: "CEO Club Afghanistan",
        short_name: "CEO Club",
        description:
          "A platform for CEOs in Afghanistan to connect, share insights, and collaborate on business opportunities.",
        theme_color: "#BB7D1E",
        background_color: "#ffffff",
        display: "standalone",
        start_url: "/",
        icons: [
          {
            src: "/LOGO.png",
            sizes: "192x192",
            type: "image/png",
          },
          {
            src: "/LOGO.png",
            sizes: "512x512",
            type: "image/png",
          },
        ],
      },
    }),
  ],
});
