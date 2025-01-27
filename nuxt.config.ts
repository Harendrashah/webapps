// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: false },
  modules: [
    '@nuxtjs/tailwindcss',
    '@formkit/nuxt',
  ],

  // Set base URL for GitHub Pages
  app: {
    baseURL: '/webapps/', // Repository name
  },

  // Include Tailwind CSS
  css: [
    '~/assets/css/tailwind.css',
  ],

  tailwindcss: {
    viewer: false, // Disable Tailwind CSS viewer in production
  },

  // Generate static site
  target: 'static',

  // SPA fallback for GitHub Pages routing
  generate: {
    fallback: '404.html', // Ensure this for proper SPA support
  },
});
