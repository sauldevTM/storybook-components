import { Meta, StoryObj } from "@storybook/react";
import MyLabel from "../../components/MyLabel";

const meta = {
  title: "UI/MyLabel",
  component: MyLabel,
  tags: ["autodocs"],
  argTypes: {
    size: {
      control: {
        type: "select",
      },
    },
    color: {
      control: {
        type: "select",
      },
    },
    customColor: {
      control: {
        type: "color",
      },
    },
  },
} satisfies Meta<typeof MyLabel>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Base: Story = {
  args: {
    label: "Hello World",
    size: "text-base",
    allCaps: false,
  },
};

export const AllCaps: Story = {
  args: {
    ...Base.args,
    allCaps: true,
  },
};

export const Color: Story = {
  args: {
    ...Base.args,
    color: "text-primary",
  },
};

export const CustomColor: Story = {
  args: {
    ...Base.args,
    size: "text-lg",
    customColor: "pink",
  },
};
