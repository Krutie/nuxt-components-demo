export default {
  name: "heading",
  functional: true,
  render(h, { props, data, children, slots }) {
    const titleClass = `text-center py-5 text-white -mx-1 -mb-1 rounded-sm bg-indigo-800`;
    return h("div", { class: titleClass }, [slots().default]);
  },
};
