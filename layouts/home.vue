<template>
  <div class="mx-auto">
    <header class="py-3 pl-5">
      <h1 class="text-xl text-center">
        <nuxt-link to="/">
          <span class="font-bold"> @nuxt/components </span>
          Sample Project
        </nuxt-link>
      </h1>
    </header>
    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-12">
      <div
        class="col-span-12 md:max-w-5xl max-w-xs sm:max-w-xl md:max-w-5xl mx-auto"
      >
        <nuxt />
      </div>
    </div>
  </div>
</template>
