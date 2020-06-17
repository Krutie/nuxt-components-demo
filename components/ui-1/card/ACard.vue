<script>
import Vue from "vue";
export default {
    name: "card",
    props: {
        padding: {
            type: Number,
            default: 0,
        },
        borderWidth: {
            type: Number,
            default: 0,
        },
        borderRadius: {
            type: String,
            default: "md",
        },
    },
    computed: {
        myClass() {
            return `shadow flex flex-col p-${this.padding} border-${this.borderWidth} rounded-${this.borderRadius} border-indigo-700`;
        },
    },
    render: function(h) {
        return h(
            "div",
            {
                class: this.myClass,
            },
            [this.$slots.header, this.$slots.default, this.$slots.footer]
        );
    },
};
</script>
