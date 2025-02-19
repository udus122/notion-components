import VideoExternalObject from "./Video.External.json";
import VideoFileObject from "./Video.File.json";
import { Video } from "./Video";
import VideoYouTubeObject from "./Video.YouTube.json";

import type { VideoBlockObject } from "@udus/notion-types";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Video> = {
  title: "Blocks/Video",
  component: Video,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof Video>;

export const Default: Story = {
  args: {
    block: VideoExternalObject as VideoBlockObject,
  },
};

export const External: Story = {
  args: {
    block: VideoExternalObject as VideoBlockObject,
  },
};

export const File: Story = {
  args: {
    block: VideoFileObject as VideoBlockObject,
  },
};

export const YouTube: Story = {
  args: {
    block: VideoYouTubeObject as unknown as VideoBlockObject,
  },
};
