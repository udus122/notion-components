import { RichText } from "../RichText/RichText.js";

import { BlockList } from "./BlockList.js";

import type { BulletedListItemBlock } from "../../types/notion/blocks/bulletedListItem.js";

export const BulletedListItem: BulletedListItemBlock = ({ block }) => {
  return (
    <li
      id={block.id}
      className={`notion_bulleted_list_item notion_color_${block.bulleted_list_item.color}`}
    >
      <RichText richText={block.bulleted_list_item.rich_text} />
      <div>
        {block.bulleted_list_item.children && (
          <BlockList blocks={block.bulleted_list_item.children} />
        )}
      </div>
    </li>
  );
};
