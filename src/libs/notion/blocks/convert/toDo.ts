import { convertResponseToRichText } from "../../richText/richText.js";
import { fetchBlockList } from "../fetchBlockList.js";

import type { ToDoBlockObject } from "../../../../types/notion/block/toDo.js";
import type { ToDoBlockObjectResponse } from "@notionhq/client/build/src/api-endpoints.js";

export const convertToDoResponseToBlock = async (
  block: ToDoBlockObjectResponse,
): Promise<ToDoBlockObject> => {
  if (block.has_children) {
    const { ok, data } = await fetchBlockList({ block_id: block.id });

    if (ok) {
      return {
        ...block,
        to_do: {
          ...block.to_do,
          rich_text: await convertResponseToRichText(block.to_do.rich_text),
          children: data,
        },
      } satisfies ToDoBlockObject;
    }
  }

  return {
    ...block,
    to_do: {
      ...block.to_do,
      rich_text: await convertResponseToRichText(block.to_do.rich_text),
    },
  } satisfies ToDoBlockObject;
};
