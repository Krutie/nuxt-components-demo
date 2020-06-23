<template>
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
</template>
<style>
li {
  @apply m-2 py-1 px-3 mx-2 text-gray-300;
}
.nuxt-link-active {
  @apply text-indigo-700;
}
.nuxt-link-exact-active {
  @apply font-bold;
}
</style>
