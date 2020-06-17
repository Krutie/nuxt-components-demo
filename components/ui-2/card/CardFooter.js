export default {
  name: "CardFooter",
  functional: true,
  render(h, { children }) {
    const footerClass = "px-2 pt-2 text-sm text-center";
    return h("div", { class: footerClass }, children);
  },
};
