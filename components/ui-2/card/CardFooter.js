export default {
  name: "footnote",
  functional: true,
  props: [],
  render(h, { props, data, children }) {
    const footerClass = "px-2 pt-2 text-sm text-center";
    return h("div", { class: footerClass }, children);
  },
};
