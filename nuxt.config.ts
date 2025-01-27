export default defineNuxtConfig({
  modules: ['@nuxtjs/tailwindcss', '@formkit/nuxt'],

  app: {
    baseURL: '/webapps/', // Adjust for GitHub Pages
  },

  css: [
    '~/assets/css/tailwind.css', // Include Tailwind CSS
  ],

  target: 'static',

  generate: {
    fallback: '404.html', // SPA routing fallback
  },

  compatibilityDate: '2025-01-27',
});