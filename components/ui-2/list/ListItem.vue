<script>
import Vue from "vue";
export default {
    name: "ListItem",
    functional: true,
    render: function(h, { props, slots }) {
        const listItemClass = "flex justify-between items-center p-3";
        return h("div", { class: listItemClass }, [slots().default]);
    },
};
</script>
