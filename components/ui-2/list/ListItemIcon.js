import Icon from "vue-awesome/components/Icon";

export default {
  name: "footnote",
  functional: true,
  props: {
    icon: {
      type: String,
    },
  },
  render(h, { props, data, children }) {
    const avatarClass = "p-2 rounded-full text-sm text-center text-gray-400";
    const blah = h(Icon, {
      props: {
        name: props.icon,
        scale: 1.5,
      },
    });
    return h("div", { class: avatarClass }, [blah]);
  },
};
