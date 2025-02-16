import type { UrlPropertyItemObject } from "@repo/notion-types";
import type { Client } from "@notionhq/client";
import type { UrlPropertyItemObjectResponse } from "@notionhq/client/build/src/api-endpoints.js";

export const convertResponseToUrlPropertyItem = (
  property: UrlPropertyItemObjectResponse,
  client: Client,
): UrlPropertyItemObject => {
  return {
    ...property,
  } satisfies UrlPropertyItemObject;
};
