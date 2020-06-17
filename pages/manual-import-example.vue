<template>
  <div class="container mx-auto">
    <div class="pb-5">
      <h2 class="text-xl text-center py-4">
        <span class="font-bold"> A. </span>
        Manual import
      </h2>
      <!-- Each component manually imported here. Check `pages/version-a.vue` for
      details. -->
    </div>
    <div
      class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-8"
    >
      <a-card
        :padding="2"
        :border-width="2"
        border-radius="md"
        v-for="(n, index) in items"
        :key="`item-${index}`"
      >
        <template v-slot:header>
          <a-card-item>
            <span class="text-sm text-gray-800"> A. {{ n.name }}</span>
            <span class="text-xl text-indigo-700 p-3">
              <icon :name="n.icon" scale="2" />
            </span>
          </a-card-item>
        </template>

        <a-card-content>
          <span class="text-md text-center block py-2"> {{ n.subtitle }}</span>
        </a-card-content>

        <template v-slot:footer>
          <a-card-heading>
            <span class="block text-xl text-gray-400">
              <icon :name="n.icon" scale="2.5" />
            </span>
            <span class="block uppercase pt-5"> {{ n.name }} </span>
          </a-card-heading>
        </template>
      </a-card>
    </div>
  </div>
</template>

<script>
import data from "~/static/barney.json";

import ACard from "@/components/ui-1/Card/ACard";
import ACardContent from "@/components/ui-1/Card/ACardContent";
import ACardItem from "@/components/ui-1/Card/ACardItem";
import ACardHeading from "@/components/ui-1/Card/ACardHeading";

export default {
  components: {
    // Try commenting component/s below
    // and you should see an error message/s stating,
    // Unknown custom element - ... - did you register the component correctly?
    // That is because, these components aren't using
    // @nuxt/components module
    ACard,
    ACardContent,
    ACardItem,
    ACardHeading,
  },
  data() {
    return {
      items: data,
    };
  },
};
</script>
