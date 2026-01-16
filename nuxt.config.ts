// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['@nuxt/eslint', 'shadcn-nuxt', '@vueuse/nuxt', '@nuxtjs/color-mode', '@nuxt/ui', '@vueuse/nuxt',],

  devtools: {
    enabled: true
  },

  css: ['~/assets/css/tailwind.css'],

  routeRules: {
    '/': { prerender: true }
  },

  compatibilityDate: '2025-01-15',

  eslint: {
    config: {
      stylistic: {
        commaDangle: 'never',
        braceStyle: '1tbs'
      }
    }
  },

  components: [
    {
      path: '~/components',
      extensions: ['.vue'],
    },
  ],

  ui: {
    fonts: false
  },

  shadcn: {
    /**
     * Prefix for all the imported component.
     * @default "Ui"
     */
    prefix: '',
    /**
     * Directory that the component lives in.
     * Will respect the Nuxt aliases.
     * @link https://nuxt.com/docs/api/nuxt-config#alias
     * @default "@/components/ui"
     */
    componentDir: '@/components/ui'
  }
})