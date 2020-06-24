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
  buildModules: ["@nuxtjs/tailwindcss", "kru-components/nuxt"],

  /* Module Option as a Boolean */
  // components: true,

  /* Module Option as an array */
  components: [
    // Module Option as an array of Strings
    // "~/components/ui-1/",

    // Module Option as an array of Objects
    {
      path: "~/components/layout/",
    },
    {
      path: "~/components/ui-2/BaseButton/",
    },
    {
      path: "~/components/ui-2/MagicButton/",
      extensions: ["vue"],
    },
    {
      path: "~/components/ui-2/",
      // prefix: "aex",
      // ignore: ["**/*.js"], // will ignore js files found directly under components/ui-2 and sub-folders
      // ignore: ["**/Card/*.js"], // will ignore js files found under components/ui-2/card
      // ignore: ["**/List/*.js"], // will ignore js files found under components/ui-2/list
    },
  ],

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
