import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Button } from "./Button";
const Template: ComponentStory<typeof Button> = function (args) {
  return <Button {...args}>Example</Button>;
};
const Default = Template.bind({});
Default.args = {};
export default {
  component: Button,
  title: "UiKit/Button",
} as ComponentMeta<typeof Button>;
export { Default };
