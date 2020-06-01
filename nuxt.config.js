export default {
  mode: "universal",
  /*
   ** Headers of the page
   */
  head: {
    title: process.env.npm_package_name || "",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content: process.env.npm_package_description || "",
      },
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: "#fff" },
  /*
   ** Global CSS
   */
  css: ["~/assets/css/tailwind.css"],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: ["~/plugins/vue-awesome"],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    // Doc: https://github.com/nuxt-community/nuxt-tailwindcss
    "@nuxtjs/tailwindcss",
    "@nuxt/components",
    "kru-components/src/nuxt", // this needs @nuxt/components to be installed and configured
  ],

  /* Module Option as a Boolean */
  // components: true,

  /* Module Option as an array of Strings */
  // components: ["~/components/ui-2/"],

  /* Module Option as an array of Objects */
  components: [
    {
      path: "~/components/ui-2/",
      // prefix: "aex",
      // ignore: ["**/*.js"], // will ignore js files found directly under components/ui-2 and sub-folders
      // ignore: ["**/Card/*.js"], // will ignore js files found under components/ui-2/card
      // ignore: ["**/List/*.js"], // will ignore js files found under components/ui-2/list
    },
  ],

  /* Module Option as an array of Objects within `dirs` array */
  // components: {
  //   dirs: [
  //     {
  //       path: "~/components/ui-2/",
  //       prefix: "aex"
  //     },
  //   ],
  // },

  /* top-level ignore property
     lazy-loading-example.vue page won't be generated during 
     npm run generate 
  */
  // ignore: "pages/lazy-loading-example.vue",

  tailwindcss: {
    configPath: "~/tailwind.config.js",
    cssPath: "~/assets/css/tailwind.css",
    exposeConfig: true,
  },

  // ** Nuxt.js modules
  modules: [],
  /*
   ** Build configuration
   */
  build: {
    additionalExtensions: ["jsx"],
    transpile: [/^vue-awesome/],
    /*
     ** You can extend webpack config here
     */

    extend(config, ctx) {},
  },
};
