<template>
  <div class="md:max-w-4xl max-w-xs sm:max-w-xl md:max-w-4xl mx-auto">
    <h1 class="text-3xl text-center py-4">
      <nuxt-link to="/"> @nuxt/components example</nuxt-link>
    </h1>
    <ul class="p-5 flex justify-center">
      <li>
        <nuxt-link to="/version-a" class="hover:text-gray-900">
          <span class="block font-bold"> A </span>
          <span class="text-sm">Manual Import </span>
        </nuxt-link>
      </li>
      <li>
        <nuxt-link to="/version-b" class="hover:text-green-500">
          <span class="block font-bold"> B </span>
          <span class="text-sm">Auto Import </span>
        </nuxt-link>
      </li>
      <li>
        <nuxt-link to="/version-c" class="hover:text-green-500">
          <span class="block font-bold"> C </span>
          <span class="text-sm">3rd-Party Library</span>
        </nuxt-link>
      </li>
      <li>
        <nuxt-link to="/version-d" class="hover:text-green-500">
          <span class="block font-bold"> D </span>
          <span class="text-sm">Lazy Loading</span>
        </nuxt-link>
      </li>
    </ul>
    <nuxt />
  </div>
</template>

<style>
li {
  @apply inline py-2 px-3 border-2 rounded-md mx-2 text-gray-600 text-center;
}
.nuxt-link-active {
  @apply text-green-500;
}
</style>
