export default {
  name: "heading",
  functional: true,
  render(h, { props, data, children, slots }) {
    const titleClass = `text-center py-5 text-white rounded-sm rounded-tl-full -mx-1 -mb-1 bg-gray-900`;
    return h("div", { class: titleClass }, [slots().default]);
  },
};
