import getRoutes from "./utils/get-routes";
import getSiteMeta from "./utils/get-site-meta";

const meta = getSiteMeta();

export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Mindaugas Urbontaitis',
    meta: [
      ...meta,
      { charset: 'utf-8' },
      { name: "HandheldFriendly", content: "True" },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Mindaugas Urbontaitis personal blog' },
      { name: 'format-detection', content: 'telephone=no' },
      { property: "og:site_name", content: "Mindaugas Urbontaitis" },      
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        hid: "canonical",
        rel: "canonical",
        href: "https://www.urbontaitis.lt",
      },
    ]
  },

  sitemap: {
    hostname: 'https://www.urbontaitis.lt',
    routes() {
      return getRoutes();
    },
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    "@picocss/pico/css/pico.min.css",
    "~/assets/global.css"
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '~/plugins/vue-lazysizes.client.js',
    '~/plugins/date-formatter.js',
    '~/plugins/components.js',
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    ['nuxt-fontawesome', {
      component: 'fa',
      imports: [
        {
          set: '@fortawesome/free-brands-svg-icons',
          icons: ['faGithub', 'faLinkedin', 'faInstagram', 'faTwitter', 'faFacebook']
        },
        {
          set: '@fortawesome/free-solid-svg-icons',
          icons: ['faMapMarker', 'faLink']
        }
      ]
    }]
  ],

  preset: '@nuxt/test-utils',

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
    // https://go.nuxtjs.dev/content
    '@nuxt/content',
    '@bazzite/nuxt-optimized-images',
    '@nuxtjs/sitemap'
  ],

  optimizedImages: {
    inlineImageLimit: -1,
    handleImages: ['jpeg', 'png', 'svg', 'webp', 'gif'],
    optimizeImages: true,
    optimizeImagesInDev: false,
    defaultImageLoader: 'img-loader',
    mozjpeg: {
      quality: 85
    },
    optipng: false,
    pngquant: {
      speed: 7,
      quality: [0.65, 0.8]
    },
    webp: {
      quality: 85
    }
  },

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      lang: 'en'
    }
  },

  // Content module configuration: https://go.nuxtjs.dev/config-content
  content: {},

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    extend(config, { isDev, isClient, loaders: { vue } }) {
      vue.transformAssetUrls.LazyImage = ["src"];
    }
  }
}
