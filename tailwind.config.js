/*
 ** TailwindCSS Configuration File
 **
 ** Docs: https://tailwindcss.com/docs/configuration
 ** Default: https://github.com/tailwindcss/tailwindcss/blob/master/stubs/defaultConfig.stub.js
 */

module.exports = {
  purge: {
    enabled: process.env.NODE_ENV === "production",
    content: [
      "components/**/**/*.vue",
      "components/**/**/*.js",
      "pages/**/*.vue",
      "layouts/**/*.vue",
      "plugins/**/*.js",
      "nuxt.config.js",
    ],
    options: {
      whitelist: ["text-indigo-500", "bg-indigo-400", "first"],
    },
  },
  variants: {
    borderWidth: ["responsive", "first", "hover", "focus"],
  },
  plugins: [],
};
