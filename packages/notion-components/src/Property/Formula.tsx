import { Checkbox } from "../Common/Checkbox";
import { DateComponent } from "../Common/Date";

import type { FormulaPropertyItemComponent } from "@udus/notion-types";

export const FormulaProperty: FormulaPropertyItemComponent = ({
  propertyItem,
  format,
}) => {
  const { formula } = propertyItem;
  return (
    <div id={propertyItem.id} className="notion-property-item notion-formula">
      {formula.type === "string" ? (
        <span>{formula.string}</span>
      ) : formula.type === "number" ? (
        <span>{formula.number}</span>
      ) : formula.type === "boolean" ? (
        <Checkbox checked={formula.boolean ?? false} />
      ) : formula.type === "date" ? (
        <DateComponent date={formula.date} format={format} />
      ) : null}
    </div>
  );
};
