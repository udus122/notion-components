import NumberedList from "./NumberedList";
import NumberedListObject from "./NumberedList.json";

import type { NumberedListComponentBlockObject } from "@/types";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof NumberedList> = {
  title: "Blocks/NumberedList",
  component: NumberedList,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof NumberedList>;

export const Default: Story = {
  args: {
    block: NumberedListObject as NumberedListComponentBlockObject,
  },
};
