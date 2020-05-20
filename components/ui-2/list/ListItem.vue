<script>
import Vue from "vue";
export default {
    functional: true,
    render: function(h, { props, slots }) {
        const listItemClass =
            "flex justify-between items-center p-4 border-t-2 first:border-t-0";
        return h("div", { class: listItemClass }, [slots().default]);
    },
};
</script>
