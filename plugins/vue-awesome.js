import Vue from "vue";

// only import the icons you use to reduce bundle size
import "vue-awesome/icons/heart";
import "vue-awesome/icons/bolt";
import "vue-awesome/icons/cogs";
import "vue-awesome/icons/fire";
import "vue-awesome/icons/brain";
import "vue-awesome/icons/binoculars";
import "vue-awesome/icons/code";

/* Register component globally */
import Icon from "vue-awesome/components/Icon";

Vue.component("icon", Icon);