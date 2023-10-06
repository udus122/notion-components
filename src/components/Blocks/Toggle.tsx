import RichTexts from "../RichTexts/RichTexts";

import Blocks from "./Blocks";

import type { BlockComponentProps, ToggleBlockObjectComponent } from "@/types";

type Props = BlockComponentProps<ToggleBlockObjectComponent>;

const Toggle: React.FC<Props> = ({ block }) => {
  return (
    <details
      id={block.id}
      className={`notion_toggle notion_color_${block.toggle.color}`}
    >
      <summary className="notion_toggle_summary">
        <RichTexts richTexts={block.toggle.rich_text} />
      </summary>
      <div className="notion_toggle_details">
        {block.children && <Blocks blocks={block.children} />}
      </div>
    </details>
  );
};

export default Toggle;
