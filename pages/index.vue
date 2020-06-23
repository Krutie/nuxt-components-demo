<template>
  <div class="mx-auto">
    <footer-links />

    <card :padding="2" bgColor="gray-800" border-radius="lg">
      <template v-slot:header>
        <card-item>
          <span class="block text-gray-600 text-2xl pl-5"> Examples </span>
          <span :class="`text-xl text-gray-300 p-3`">
            <icon name="cogs" scale="1.5" />
          </span>
        </card-item>
      </template>

      <card-content>
        <navbar-links />
      </card-content>
    </card>
  </div>
</template>

<script>
export default {
  layout: "home",
};
</script>
