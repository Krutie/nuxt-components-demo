<template>
  <div class="container mx-auto">
    <div class="p-5">
      <span class="block text-xl py-2"> Version B </span>
      No import statement here! Check `pages/version-b.vue` to see that there
      are no import statements written in script section. @nuxt/component
      configuration can be seen at `nuxt.config.js` file under `components`
      options.
    </div>
    <div
      class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-8 p-5"
    >
      <card-body
        :padding="2"
        :border-width="0"
        border-radius="md"
        v-for="(n, index) in items"
        :key="index"
      >
        <template v-slot:header>
          <card-item>
            <span class="text-sm text-gray-800"> B. {{ n.name }}</span>
            <span :class="`text-xl text-${color}-500 p-3`">
              <icon name="heart" scale="2" />
            </span>
          </card-item>
        </template>

        <card-content>
          <span class="text-xl text-center block py-2"> {{ n.subtitle }}</span>
        </card-content>

        <template v-slot:footer>
          <card-title :color="color">
            <span class="block text-xl text-gray-200">
              <icon name="heart" scale="3" />
            </span>
            <span class="block uppercase pt-5 font-bold"> {{ n.name }} </span>
          </card-title>
          <card-footer> Version B </card-footer>
        </template>
      </card-body>
    </div>
  </div>
</template>

<script>
import data from "~/static/data.json";
import "vue-awesome/icons/heart";

export default {
  data() {
    return {
      desc:
        "Use the .normal-case utility to preserve the original casing. This is typically used to reset capitalization at different breakpoints.",
      items: data,
      color: "green",
    };
  },
};
</script>
