<script>
import Vue from "vue";
export default {
    functional: true,
    render: function(h, { children }) {
        const contentClass = "py-3 flex-1";
        return h("div", { class: contentClass }, children);
    },
};
</script>
