import { BulletedListItem } from "./BulletedListItem.js";

import type {
  BlockComponentProps,
  BulletedListBlockObjectComponent,
} from "../../types/components.js";

type Props = BlockComponentProps<BulletedListBlockObjectComponent>;

export const BulletedList: React.FC<Props> = ({ block, blocks, mapper }) => {
  return (
    <ul className="notion_bulleted_list">
      {block.bulleted_list.items.map((item) => {
        return (
          <BulletedListItem
            key={item.id}
            block={item}
            blocks={blocks}
            mapper={mapper}
          />
        );
      })}
    </ul>
  );
};
