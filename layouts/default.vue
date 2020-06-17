<template>
  <div class="mx-auto">
    <header class="py-3 pl-5">
      <h1 class="text-xl">
        <nuxt-link to="/">
          <span class="font-bold"> @nuxt/components </span>
          Sample Project
        </nuxt-link>
      </h1>
    </header>
    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-12">
      <aside
        class="col-span-3 bg-gray-800 md:rounded-l-none md:rounded-r-lg sm:h-auto md:h-screen py-5"
      >
        <span class="block text-gray-600 text-2xl pl-5"> Examples </span>
        <ul>
          <li>
            <nuxt-link
              to="/manual-import-example"
              class="text-gray-500 text-md hover:text-indigo-500"
            >
              A. Manual Import
            </nuxt-link>
          </li>
          <li>
            <nuxt-link
              to="/auto-import-example"
              class="text-gray-500 text-md hover:text-indigo-500"
            >
              B. Auto Import
            </nuxt-link>
          </li>
          <li>
            <nuxt-link
              to="/multi-file-component-example"
              class="text-gray-500 text-md hover:text-indigo-500"
            >
              C. Multi-file Component
            </nuxt-link>
          </li>
          <li>
            <nuxt-link
              to="/lazy-loading-example"
              class="text-gray-500 text-md hover:text-indigo-500"
            >
              D. Lazy Loading
            </nuxt-link>
          </li>
          <li>
            <nuxt-link
              to="/third-party-example"
              class="text-gray-500 text-md hover:text-indigo-500"
            >
              E. 3rd-Party Library
            </nuxt-link>
          </li>
        </ul>
      </aside>
      <div
        class="col-span-9 md:max-w-4xl max-w-xs sm:max-w-xl md:max-w-4xl mx-auto px-5"
      >
        <nuxt />
      </div>
    </div>
    <footer
      class="p-5 sm:border-t-2 md:border-t-0 border-b-2 text-center text-lg"
    >
      <span class="text-gray-500"> ... ... ... </span>
      <!--  <div>
        <a class="text-indigo-600 hover:text-indigo-800" href="" target="_blank"
          >Supporting Article</a
        >
      </div> -->
      <div>
        <a
          class="text-indigo-600 hover:text-indigo-800"
          href="https://github.com/Krutie/nuxt-components-demo"
          target="_blank"
          >Sample Project Repo</a
        >
      </div>
      <div>
        <a
          class="text-indigo-600 hover:text-indigo-800"
          href="https://www.npmjs.com/package/@nuxt/components"
          target="_blank"
        >
          @nuxt/components Module
        </a>
      </div>
    </footer>
  </div>
</template>

<style>
li {
  @apply m-2 py-2 px-3 mx-2 text-gray-300;
}
.nuxt-link-active {
  @apply text-indigo-700;
}
.nuxt-link-exact-active {
  @apply text-indigo-500 font-bold;
}
</style>
