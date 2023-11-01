import type { PropertyItemProps } from "./propertyItem.js";
import type { FormulaPropertyItemObjectResponse } from "@notionhq/client/build/src/api-endpoints.js";
import type { ComponentType } from "react";

export type FormulaPropertyItemObject = FormulaPropertyItemObjectResponse;

export type FormulaPropertyItemProps =
  PropertyItemProps<FormulaPropertyItemObject>;

export type FormulaPropertyItemComponent =
  ComponentType<FormulaPropertyItemProps>;
