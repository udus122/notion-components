import { RichTextItemResponse } from "@notionhq/client/build/src/api-endpoints";

import Color from "./Color";
import ColorObject from "./Color.json";

import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Color> = {
  title: "RichTexts/Annotation/Color",
  component: Color,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof Color>;

export const Default: Story = {
  args: {
    richTextItem: ColorObject as RichTextItemResponse,
    children: "This is Color text",
  },
};
