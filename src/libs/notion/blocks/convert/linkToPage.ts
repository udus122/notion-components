import { isFullDatabase, isFullPage } from "@notionhq/client";

import { listComments } from "../../comments.js";
import { retrieveDatabase } from "../../database/retrieve.js";
import { retrievePage } from "../../pages/retrieve.js";

import type { LinkToPageBlockObject } from "../../../../types/notion/block/linkToPage.js";
import type { LinkToPageBlockObjectResponse } from "@notionhq/client/build/src/api-endpoints.js";

export const convertLinkToPageResponseToBlock = async (
  block: LinkToPageBlockObjectResponse,
): Promise<LinkToPageBlockObject> => {
  switch (block.link_to_page.type) {
    case "database_id": {
      const { ok, data } = await retrieveDatabase({
        database_id: block.link_to_page.database_id,
      });

      if (!ok) {
        return block satisfies LinkToPageBlockObject;
      }

      if (!isFullDatabase(data)) {
        return block satisfies LinkToPageBlockObject;
      }

      return {
        ...block,
        link_to_page: {
          ...block.link_to_page,
          database: data,
        },
      } satisfies LinkToPageBlockObject;
    }
    case "page_id": {
      const { ok, data } = await retrievePage({
        page_id: block.link_to_page.page_id,
      });

      if (!ok) {
        return block satisfies LinkToPageBlockObject;
      }

      if (!isFullPage(data)) {
        return block satisfies LinkToPageBlockObject;
      }

      return {
        ...block,
        link_to_page: {
          ...block.link_to_page,
          page: data,
        },
      } satisfies LinkToPageBlockObject;
    }
    case "comment_id": {
      const linkedComments = await listComments({
        block_id: block.link_to_page.comment_id,
      });
      return {
        ...block,
        link_to_page: {
          ...block.link_to_page,
          comments: linkedComments,
        },
      } satisfies LinkToPageBlockObject;
    }
  }
};
