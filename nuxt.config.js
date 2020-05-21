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
  tailwindcss: {
    configPath: "~/tailwind.config.js",
    cssPath: "~/assets/css/tailwind.css",
    exposeConfig: true,
  },
  components: {
    dirs: [
      // Path as a String, also default
      // "~/components",
      // Path as an Object
      {
        path: "~/components/ui-2/",
        // prefix: "aex",
        // ignore: ["**/*.js"], // will ignore js files found directly under components/ui-2 and sub-folders
        // ignore: ["**/card/*.js"], // will ignore js files found under components/ui-2/card
        // ignore: ["**/list/*.js"], // will ignore js files found under components/ui-2/list
      },
    ],
  },

  // ** Nuxt.js modules

  modules: ["@nuxt/http"],
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
