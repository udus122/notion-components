// import SyntaxHighlighter from "react-syntax-highlighter";
// import { a11yDark } from "react-syntax-highlighter/dist/esm/styles/hljs";

import { RichTexts } from "../RichTexts/RichTexts.js";

import type {
  BlockComponentProps,
  CodeBlockObjectComponent,
} from "../../types/components.js";

type Props = BlockComponentProps<CodeBlockObjectComponent>;

export const Code: React.FC<Props> = ({ block }) => {
  return (
    <div id={block.id} className="notion_code">
      <div className="notion_code_header">
        <div className="notion_code_langage">{block.code.language}</div>
      </div>
      {/* <SyntaxHighlighter
        language={
          block.code.language === "plain text" ? "text" : block.code.language
        }
        style={a11yDark}
        className="notion_code_pre"
        customStyle={{ backgroundColor: "rgba(255,255,255,0.03)" }}
      >
        {block.code.rich_text.map((t) => t.plain_text).join("")}
      </SyntaxHighlighter> */}
      {block.code.caption && (
        <div className="notion_caption">
          <RichTexts richTexts={block.code.caption} />
        </div>
      )}
    </div>
  );
};
