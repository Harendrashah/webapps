// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: false },
  modules: ['@nuxtjs/tailwindcss', '@formkit/nuxt'],

  app: {
    baseURL: '/webapps/', // Base URL for GitHub Pages
  },

  css: [
    '~/assets/css/tailwind.css', // Include Tailwind CSS
  ],

  tailwindcss: {
    viewer: false, // Disable Tailwind viewer in production
  },

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  target: 'static',

  generate: {
    fallback: '404.html', // Fallback for SPA routing
  },
});
