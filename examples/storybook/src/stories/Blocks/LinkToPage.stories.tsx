import { LinkToPage } from "@udus/notion-components";
import LinkToPageObject from "./LinkToPage.json";

import type { LinkToPageBlockObject } from "@udus/notion-types";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof LinkToPage> = {
  title: "Blocks/LinkToPage",
  component: LinkToPage,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof LinkToPage>;

export const Default: Story = {
  args: {
    block: LinkToPageObject as unknown as LinkToPageBlockObject,
  },
};
