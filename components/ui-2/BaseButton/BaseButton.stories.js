import BaseButton from "./BaseButton.vue";

export default {
  component: BaseButton,
  title: "Components/BaseButton"
};

export const Primary = () => ({
  components: { BaseButton },
  template: "<base-button> Hello </base-button>"
});
