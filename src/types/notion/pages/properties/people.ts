import type { PropertyValueProps } from "./properties.js";
import type { PeoplePropertyItemObjectResponse } from "@notionhq/client/build/src/api-endpoints.js";
import type { ComponentType } from "react";
import type { Overwrite, PartialBy } from "src/types/utils.js";

export type PeoplePropertyItemObject = PartialBy<
  Overwrite<
    PeoplePropertyItemObjectResponse,
    { people: Array<PeoplePropertyItemObjectResponse["people"]> }
  >,
  "object"
>;

export type PeoplePropertyItemProps =
  PropertyValueProps<PeoplePropertyItemObject>;

export type PeoplePropertyItemComponent =
  ComponentType<PeoplePropertyItemProps>;
