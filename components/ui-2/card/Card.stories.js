import Card from "./Card.vue";
import CardItem from "./CardItem.vue";
import CardContent from "./CardContent.vue";
import CardFooter from "./CardFooter";
import CardTitle from "./CardTitle";

import data from "../../../static/barney.json";

export default {
  component: Card,
  title: "Components/Card",
  parameters: {
    layout: "centered"
  },
  decorators: [
    () => ({ template: '<div class="grid grid-cols-3"><story /></div>' })
  ],
  argTypes: {
    icon: {
      control: {
        type: "select",
        options: data.map(m => m.icon)
      },
      defaultValue: "cogs"
    },
    name: {
      control: {
        type: "select",
        options: data.map(m => m.name)
      },
      defaultValue: "Perfection"
    },
    subtitle: {
      control: {
        type: "select",
        options: data.map(m => m.subtitle)
      },
      defaultValue: "It is not good enough to win, everybody else should lose."
    }
  }
};

//👇 We create a “template” of how args map to rendering
const Template = (args, { argTypes }) => ({
  components: { Card, CardItem, CardContent, CardTitle },
  props: Object.keys(argTypes),
  template: `
      <Card :padding="padding" :border-radius="borderRadius" :border-width="borderWidth">
        <template v-slot:header>
          <card-item>
            <span class="text-sm text-gray-800"> {{ name }} </span>
            <span class="text-xl text-indigo-700 p-3">
              <icon :name="icon" scale="2" />
            </span>
          </card-item>
        </template>

        <card-content>
          <span class="text-md text-center block py-2"> {{ subtitle }}</span>
        </card-content>

        <template v-slot:footer>
          <card-title :color="color">
            <span class="block text-xl text-gray-200">
              <icon :name="icon" scale="2.5" />
            </span>
            <span class="block uppercase pt-5 font-bold"> {{ name }} </span>
          </card-title>
        </template>
      </Card>
  `
});

export const Primary = Template.bind({});
Primary.args = {
  padding: 2,
  borderRadius: "md",
  borderWidth: 0,
  color: "indigo"
};
