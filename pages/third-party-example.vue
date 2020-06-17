<template>
  <div class="container mx-auto">
    <div class="pb-5">
      <h2 class="text-xl text-center py-4">
        <span class="font-bold"> E. </span>
        Third-party component library
      </h2>
    </div>
    <div class="grid grid-cols-1 sm:grid-cols-2 gap-8">
      <kru-counter :increase-by="10" class="mx-auto"></kru-counter>
      <KruCounter :increase-by="2" class="mx-auto"></KruCounter>
    </div>
  </div>
</template>
<style>
button {
  @apply bg-indigo-700 p-3 border rounded-md text-white;
}
</style>
