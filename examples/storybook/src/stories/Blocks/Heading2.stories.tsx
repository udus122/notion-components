import { Heading2 } from "@udus/notion-components";
import Heading2Object from "./Heading2.json";
import Heading2Toggleable from "./Heading2.Toggleable.json";

import type { Heading2BlockObject } from "@udus/notion-types";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Heading2> = {
  title: "Blocks/Heading2",
  component: Heading2,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof Heading2>;

export const Default: Story = {
  args: {
    block: Heading2Object as Heading2BlockObject,
  },
};

export const Toggleable: Story = {
  args: {
    block: Heading2Toggleable as Heading2BlockObject,
  },
};
