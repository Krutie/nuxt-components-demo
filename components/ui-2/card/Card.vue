<script>
import Vue from "vue";
export default {
    name: "Card",
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
        bgColor: {
            type: String,
            default: "gray-100",
        },
    },
    computed: {
        myClass() {
            return `shadow flex flex-col p-${this.padding} border-${this.borderWidth} rounded-${this.borderRadius} border-gray-600 bg-${this.bgColor}`;
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
