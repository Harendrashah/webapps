export default defineNuxtConfig({
  modules: ['@nuxtjs/tailwindcss', '@formkit/nuxt'],

  app: {
    baseURL: '/webapps/',
     // Adjust for GitHub Pages
  },

  css: [
    '~/assets/css/tailwind.css', // Include Tailwind CSS
  ],



  compatibilityDate: '2025-01-27',
});