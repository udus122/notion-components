import { convertResponseToRichText } from "../../richText/richText.js";
import { fetchBlockList } from "../fetchBlockList.js";

import type { ParagraphBlockObject } from "../../../../types/notion/block/paragraph.js";
import type { ParagraphBlockObjectResponse } from "@notionhq/client/build/src/api-endpoints.js";

export const convertParagraphResponseToBlock = async (
  block: ParagraphBlockObjectResponse,
): Promise<ParagraphBlockObject> => {
  if (block.has_children) {
    const { ok, data } = await fetchBlockList({ block_id: block.id });

    if (ok) {
      return {
        ...block,
        paragraph: {
          ...block.paragraph,
          rich_text: await convertResponseToRichText(block.paragraph.rich_text),
          children: data,
        },
      } satisfies ParagraphBlockObject;
    }
  }

  return {
    ...block,
    paragraph: {
      ...block.paragraph,
      rich_text: await convertResponseToRichText(block.paragraph.rich_text),
    },
  } satisfies ParagraphBlockObject;
};
