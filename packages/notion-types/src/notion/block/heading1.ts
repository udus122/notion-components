import type { BlockBlockObject, BlockBlockProps } from "./block";
import type { RichTextItemType } from "../richText/richTextItem";
import type { Heading1BlockObjectResponse } from "@notionhq/client/build/src/api-endpoints";
import type { ComponentType } from "react";

export type Heading1BlockObject = Heading1BlockObjectResponse & {
  heading_1: {
    rich_text: Array<RichTextItemType>;
    children?: Array<BlockBlockObject>;
  };
};

export type Heading1BlockProps = BlockBlockProps<Heading1BlockObject>;

export type Heading1Block = ComponentType<Heading1BlockProps>;
