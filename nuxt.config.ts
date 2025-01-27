export default defineNuxtConfig({
  modules: ['@nuxtjs/tailwindcss', '@formkit/nuxt'],

  // Set baseURL and router base for GitHub Pages deployment
  app: {
    baseURL: '/webapps/', // Adjust for GitHub Pages sub-directory
  },

  router: {
    base: '/webapps/', // Ensure router works with the base path
  },

  // Include your Tailwind CSS (make sure this file exists)
  css: [
    '~/assets/css/tailwind.css', // Tailwind CSS file
  ],

  // Target static for generating static files
  target: 'static',

  // Fallback to SPA routing when necessary
  generate: {
    fallback: '404.html', // Fallback for 404 page in static sites
  },

  // Compatibility date
  compatibilityDate: '2025-01-27',

  // Optionally, include CDN-based Tailwind CSS in case local build fails
  head: {
    link: [
      {
        rel: 'stylesheet',
        href: 'https://cdn.jsdelivr.net/npm/tailwindcss@latest/dist/tailwind.min.css'
      }
    ]
  }
});
