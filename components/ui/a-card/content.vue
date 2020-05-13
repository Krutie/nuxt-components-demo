<script>
import Vue from "vue";
export default {
    functional: true,
    render: function(h, { slots }) {
        const contentClass = "py-3 flex-1";
        return h("div", { class: contentClass }, slots().default);
    },
};
</script>
