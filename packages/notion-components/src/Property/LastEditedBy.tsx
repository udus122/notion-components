import { isFullUser } from "@notionhq/client";

import type { LastEditedByPropertyItemComponent } from "@udus/notion-types";

export const LastEditedByProperty: LastEditedByPropertyItemComponent = ({
  propertyItem,
}) => {
  return (
    <div id={propertyItem.id} className="notion-property-item notion-people">
      {isFullUser(propertyItem.last_edited_by) ? (
        <span key={propertyItem.last_edited_by.id}>
          {propertyItem.last_edited_by.name}
        </span>
      ) : null}
    </div>
  );
};
