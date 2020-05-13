export default {
  name: "v-card-title",
  functional: true,
  props: {
    color: {
      type: String,
    },
  },
  render(h, { props, slots }) {
    const titleClass = `text-center py-5 text-white rounded-sm rounded-tl-full -mx-1 -mb-1 bg-${props.color}-400`;
    return h("div", { class: titleClass }, [slots().default]);
  },
};
