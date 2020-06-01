<template>
    <button class="btn">
        <slot> </slot>
    </button>
</template>
<script>
export default {};
</script>
<style>
.btn {
    @apply bg-pink-700 p-3 border rounded-md text-white;
}
</style>
