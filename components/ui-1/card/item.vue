<script>
import Vue from "vue";
export default {
    name: "item",
    functional: true,
    render: function(h, { props, slots }) {
        const itemClass = "flex justify-between items-center";
        return h("div", { class: itemClass }, [slots().default]);
    },
};
</script>
