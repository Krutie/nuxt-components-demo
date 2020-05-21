<template>
  <div class="container mx-auto">
    <div class="p-5">
      <span class="block text-xl py-2"> B. Using @nuxt/components </span>
      No import statement here! Check `pages/version-b.vue` to see that there
      are no import statements written in script section. @nuxt/component
      configuration can be seen at `nuxt.config.js` file under `components`
      options.
    </div>

    <div
      class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-8 p-5"
    >
      <card
        :padding="2"
        :border-width="0"
        border-radius="md"
        v-for="(n, index) in items"
        :key="`n-${index}`"
      >
        <template v-slot:header>
          <card-item>
            <span class="text-sm text-gray-800"> B. {{ n.name }}</span>
            <span :class="`text-xl text-${color}-500 p-3`">
              <icon :name="n.icon" scale="2" />
            </span>
          </card-item>
        </template>

        <card-content>
          <span class="text-xl text-center block py-2"> {{ n.subtitle }}</span>
        </card-content>

        <template v-slot:footer>
          <card-title :color="color">
            <span class="block text-xl text-gray-200">
              <icon :name="n.icon" scale="2.5" />
            </span>
            <span class="block uppercase pt-5 font-bold"> {{ n.name }} </span>
          </card-title>
          <card-footer> Version B </card-footer>
        </template>
      </card>
    </div>
  </div>
</template>

<script>
import data from "~/static/data.json";

export default {
  data() {
    return {
      desc:
        "Use the .normal-case utility to preserve the original casing. This is typically used to reset capitalization at different breakpoints.",
      items: data,
      color: "green",
    };
  },
  async fetch() {
    this.posts = await this.$http.$get(
      "https://jsonplaceholder.typicode.com/posts"
    );
  },
  fetchOnServer: false,
};
</script>
