import { convertResponseToBlock } from "./convert/convertResponseToBlock";
import { retrieveBlock } from "./retrieve";

import type { BlockBlockObject, Result } from "@udus/notion-types";
import type { Client } from "@notionhq/client";
import type { GetBlockParameters } from "@notionhq/client/build/src/api-endpoints";

export const fetchBlock = async (
  client: Client,
  args: GetBlockParameters,
): Promise<Result<BlockBlockObject>> => {
  const retrievedResult = await retrieveBlock(client, args);

  if (!retrievedResult.ok) {
    return retrievedResult;
  }

  const { ok, data } = await convertResponseToBlock(
    retrievedResult.data,
    client,
  );

  if (!ok) {
    return { ok, data };
  }
  return { ok: true, data: data };
};
