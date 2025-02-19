import type { EmailPropertyItemObject } from "@udus/notion-types";
import type { Client } from "@notionhq/client";
import type { EmailPropertyItemObjectResponse } from "@notionhq/client/build/src/api-endpoints";

export const convertResponseToEmailPropertyItem = (
  property: EmailPropertyItemObjectResponse,
  client: Client,
): EmailPropertyItemObject => {
  return {
    ...property,
  } satisfies EmailPropertyItemObject;
};
