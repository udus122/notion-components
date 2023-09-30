import RichTexts from "../RichTexts/RichTexts";

import Blocks from "./Blocks";

import type {
  BlockComponentProps,
  ToDoBlockObjectResponseWithChildren,
} from "@/types";

type Props = BlockComponentProps<ToDoBlockObjectResponseWithChildren>;

const ToDo: React.FC<Props> = ({ block }) => {
  const isChecked = block.to_do.checked;
  return (
    <div
      id={block.id}
      className={`notion_block notion_to_do notion_color_${block.to_do.color}`}
    >
      <div className="notion_to_do_content">
        <span className="notion_to_do_icon">
          {isChecked ? <CheckedBox /> : <CheckBox />}
        </span>
        <span className={`notion_to_do_text ${isChecked ? "checked" : ""}`}>
          <RichTexts richTexts={block.to_do.rich_text} />
        </span>
      </div>
      {block.children && (
        <div className="notion_to_do_children">
          <Blocks blocks={block.children} />
        </div>
      )}
    </div>
  );
};

const CheckBox = () => (
  <span className="notion_checkbox">
    <svg viewBox="0 0 16 16">
      <path d="M1.5,1.5 L1.5,14.5 L14.5,14.5 L14.5,1.5 L1.5,1.5 Z M0,0 L16,0 L16,16 L0,16 L0,0 Z"></path>
    </svg>
  </span>
);

const CheckedBox = () => (
  <span className="notion_checkbox checked">
    <svg viewBox="0 0 14 14">
      <polygon points="5.5 11.9993304 14 3.49933039 12.5 2 5.5 8.99933039 1.5 4.9968652 0 6.49933039"></polygon>
    </svg>
  </span>
);

export default ToDo;
