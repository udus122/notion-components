import { NumberedListItem } from "./NumberedListItem";

import type { NumberedListBlock } from "@udus/notion-types";

export const NumberedList: NumberedListBlock = ({ block }) => {
  return (
    <ol className="notion-block notion-numbered-list">
      {block.numbered_list.items.map((item) => {
        return <NumberedListItem key={item.id} block={item} />;
      })}
    </ol>
  );
};
