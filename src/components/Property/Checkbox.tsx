import { Checkbox } from "../Checkbox.js";

import type { CheckboxPropertyItemComponent } from "../../types/notion/propertyItem/checkbox.js";

export const CheckboxProperty: CheckboxPropertyItemComponent = ({
  propertyItem,
}) => (
  <span id={propertyItem.id} className="notion-property-item notion-checkbox">
    <Checkbox checked={propertyItem.checkbox} />
  </span>
);
