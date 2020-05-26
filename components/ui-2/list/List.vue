<script>
import Vue from "vue";
export default {
    name: "List",
    functional: true,
    render: function(h, { props, slots }) {
        const listClass = "border-2 rounded-lg divide-y";
        return h("div", { class: listClass }, [slots().default]);
    },
};
</script>
