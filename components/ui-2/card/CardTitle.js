export default {
  name: "CardTitle",
  functional: true,
  props: {
    color: {
      type: String,
    },
  },
  render(h, { props, children }) {
    const titleClass = `text-center py-5 text-white rounded-bl-md rounded-tl-full -mx-1 -mb-1 bg-${props.color}-800`;
    return h("div", { class: titleClass }, children);
  },
};
