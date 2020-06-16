<template>
  <button class="btn" @click="showConsole">
    <slot> </slot>
  </button>
</template>
<script>
export default {
  methods: {
    showConsole() {
      console.log("BaseButton component takes after its folder name!");
    },
  },
};
</script>
<style>
.btn {
  @apply bg-pink-700 p-3 border rounded-md text-white;
}
</style>
