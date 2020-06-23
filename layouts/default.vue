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
        <navbar-links />
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
      <span class="text-gray-500"> --- </span>
      <footer-links />
    </footer>
  </div>
</template>
