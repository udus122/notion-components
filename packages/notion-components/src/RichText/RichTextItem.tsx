import { useMapper } from "../hooks";

import { InlineEquation } from "./InlineEquation";
import { Mention } from "./Mention";
import { Text } from "./Text";

import type { RichTextItemComponent } from "@udus/notion-types";

export const RichTextItem: RichTextItemComponent = (props) => {
  if (!props.richText) return null;

  return (
    <span className="notion-rich-text-item">
      <RichTextItemContent {...props} />
    </span>
  );
};

const RichTextItemContent: RichTextItemComponent = ({
  richText: richTextItem,
}) => {
  const { richTextItemMapper } = useMapper();

  const mapper = {
    equation: InlineEquation,
    mention: Mention,
    text: Text,
    ...richTextItemMapper,
  };

  switch (richTextItem.type) {
    case "equation": {
      const TypeEquation = mapper[richTextItem.type];
      return <TypeEquation richText={richTextItem} />;
    }
    case "mention": {
      const TypeMention = mapper[richTextItem.type];
      return <TypeMention richText={richTextItem} />;
    }
    case "text": {
      const TypeText = mapper[richTextItem.type];
      return <TypeText richText={richTextItem} />;
    }
    default:
      console.warn(`${(richTextItem as { type: never }).type} is never.`);
      return null;
  }
};
