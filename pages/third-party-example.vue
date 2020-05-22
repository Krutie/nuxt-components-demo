<template>
  <div class="container mx-auto">
    <div class="p-5">
      <span class="block text-xl py-2">
        C. Third-party Component library
      </span>
    </div>
    <div class="grid grid-cols-1 sm:grid-cols-2 gap-8 p-5">
      <kru-counter :increase-by="10" class="mx-auto"></kru-counter>
      <KruCounter :increase-by="2" class="mx-auto"></KruCounter>
    </div>
  </div>
</template>
<style>
button {
  @apply bg-green-400 p-3 border rounded-md;
}
</style>
