import Sass from 'sass'
import Fiber from 'fibers'

import { options as rehypeOptions } from './modules/@nuxt/content/rehype-add-classes'

require('dotenv').config()

const dartSass = {
  implementation: Sass,
  sassOptions: {
    fiber: Fiber,
  },
}

export default {
  // serve as static page
  target: 'static',
  head: {
    title: 'Design System - Jabar Digital Service',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },
  css: [
    '~/assets/stylesheet/app/main.scss',
    '~/assets/stylesheet/jds-design-system/main.scss',
  ],
  plugins: ['~/plugins/markdown-content-components.js'],
  router: {
    middleware: ['maintenance'],
  },
  generate: {
    fallback: true,
  },
  // @nuxt/components ============================================================
  // disable auto import component
  components: false,
  buildModules: [
    '@nuxtjs/eslint-module',
    '@nuxtjs/stylelint-module',
    '@nuxtjs/tailwindcss',
  ],
  modules: [
    [
      'nuxt-i18n',
      {
        strategy: 'no_prefix',
      },
    ],
    '@nuxt/content',
  ],
  i18n: {
    locales: [
      {
        code: 'en',
        file: 'en-US.js',
      },
      {
        code: 'id',
        file: 'id-ID.js',
      },
    ],
    lazy: true,
    langDir: 'lang/',
    defaultLocale: 'id',
    vueI18n: {
      fallbackLocale: 'id',
    },
  },
  // @nuxt/content ============================================================
  content: {
    liveEdit: false,
    markdown: {
      rehypePlugins: [['rehype-add-classes', rehypeOptions]],
    },
  },
  tailwindcss: {
    config: {
      corePlugins: {
        // preflight: false,
      },
    },
  },
  build: {
    loaders: {
      scss: dartSass,
    },
  },
}
