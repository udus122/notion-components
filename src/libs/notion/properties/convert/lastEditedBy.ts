import type { LastEditedByPropertyItemObject } from "../../../../types/notion/property/lastEditedBy.js";
import type { LastEditedByPropertyItemObjectResponse } from "@notionhq/client/build/src/api-endpoints.js";

export const convertResponseToLastEditedByPropertyItem = (
  property: LastEditedByPropertyItemObjectResponse,
): LastEditedByPropertyItemObject => {
  return {
    ...property,
  } satisfies LastEditedByPropertyItemObject;
};
