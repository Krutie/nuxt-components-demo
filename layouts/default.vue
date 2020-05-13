<template>
  <div>
    <h1 class="text-3xl text-center py-4">
      <nuxt-link to="/"> @nuxt/components example</nuxt-link>
    </h1>
    <ul class="p-5 flex justify-center">
      <li>
        <nuxt-link to="/version-a" class="hover:text-gray-900">
          Version A
        </nuxt-link>
      </li>
      <li>
        <nuxt-link to="/version-b" class="hover:text-green-500">
          Version B
        </nuxt-link>
      </li>
    </ul>
    <nuxt />
  </div>
</template>

<style>
li {
  @apply inline py-2 px-3 border-2 rounded-md mx-2 text-gray-600 font-bold;
}
</style>
