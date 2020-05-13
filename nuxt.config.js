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
  plugins: [],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    // Doc: https://github.com/nuxt-community/nuxt-tailwindcss
    "@nuxtjs/tailwindcss",
    "@nuxt/components",
  ],
  tailwindcss: {
    configPath: "~/tailwind.config.js",
    cssPath: "~/assets/css/tailwind.css",
    exposeConfig: true,
  },
  components: {
    dirs: [
      {
        path: "~/components/ui/b-card", // Correct
        // pattern: "**/*.{vue}", // { } won't work for single value
        // pattern: "**/*.vue", // works
        // pattern: "**/*.{vue,js}", // { } with comma separated values works for multiple values

        // pattern: `**/*.${extensions.join(",")}`,

        // ignore: ["**/*.js"], // Uncomment this,
        // you should see the error message, `unknown custom element...` for,
        // <card-footer> and <card-title> because they have .js extension
        // To ignore multiple file extensions add { } with comma separated values
        // ignore: ["**/*.{js,ts}"]

        prefix: "card",
      },
      {
        path: "~/node_modules/vue-awesome/components",
        // transpile true to be tested
      },
      {
        path: "~/node_modules/vue-awesome/",
        pattern: "**/*.js",
        // transpile true to be tested
      },
    ],
  },
  /*
   ** Nuxt.js modules
   */
  modules: [],
  /*
   ** Build configuration
   */
  extensions: ["ts", "tsx"],
  build: {
    additionalExtensions: ["ts", "tsx"],
    transpile: [/^vue-awesome/],
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {},
  },
};
