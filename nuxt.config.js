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
    '../assets/stylesheet/app/main.scss',
    '../assets/stylesheet/jds-design-system/main.scss',
  ],
  plugins: [],
  // @nuxt/components ============================================================
  // disable auto import component
  components: false,
  buildModules: [
    '@nuxtjs/eslint-module',
    '@nuxtjs/stylelint-module',
    '@nuxtjs/tailwindcss',
  ],
  modules: ['@nuxt/content'],
  // @nuxt/content ============================================================
  content: {
    markdown: {
      rehypePlugins: [['rehype-add-classes', rehypeOptions]],
    },
  },
  build: {
    loaders: {
      scss: dartSass,
    },
  },
}
