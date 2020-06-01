export default {
  name: "base-button",
  functional: true,
  render(h, { props, data, children, slots }) {
    const btnClass = `bg-blue-400 p-3 border rounded-full text-white`;
    return h("button", { class: btnClass }, [slots().default]);
  },
};
