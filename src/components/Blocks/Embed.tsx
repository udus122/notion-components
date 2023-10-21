import { RichTexts } from "../RichTexts/index.js";

import type {
  BlockComponentProps,
  EmbedBlockObjectComponent,
} from "../../types/components.js";

type Props = BlockComponentProps<EmbedBlockObjectComponent>;

export const Embed: React.FC<Props> = ({ block }) => {
  const tweetId = getTweetId(block.embed.url);
  if (tweetId) {
    // return <TwitterTweetEmbed options={{ theme: "dark" }} tweetId={tweetId} />;
    // TODO: eEmbed APIによる描画に変更する
    return null;
  }

  return (
    <div id={block.id} className="notion_embed">
      <iframe src={block.embed.url} title="notion embed content" />
      <div className="notion_caption notion_embed_caption">
        <RichTexts richTexts={block.embed.caption} />
      </div>
    </div>
  );
};

/* https://qiita.com/ATTACK3500/items/091bedc2bf0596e08f17 */
const getTweetId = (url: string) => {
  if (!isTweetUrl(url)) return null;

  const regexes = [
    /https?:\/\/twitter\.com\/(\w+)\/status(es)?\/(\d+)/,
    /https?:\/\/twitter\.com\/(?:#!\/)?(\w+)\/status(es)?\/(\d+)/,
    /https?:\/\/mobile\.twitter\.com\/(\w+)\/status(es)?\/(\d+)/,
  ];

  for (const regex of regexes) {
    const match = url.match(regex);
    if (match) {
      return match[match.length - 1];
    }
  }

  return null;
};

const isTweetUrl = (url: string) => {
  if (!isTwitterUrl(url)) return false;
  const regex =
    /^https?:\/\/(?:www\.|mobile\.)?twitter\.com\/(?:#!\/)?([a-zA-Z0-9_]{1,15})\/status(?:es)?\/(\d+)(?:\?.*)?$/;
  return regex.test(url);
};

const isTwitterUrl = (url: string) => {
  const twitterHostnames = [
    "twitter.com",
    "www.twitter.com",
    "mobile.twitter.com",
    // 'pbs.twimg.com',
    // 't.co',
  ];

  try {
    const parser = new URL(url);
    return twitterHostnames.includes(parser.hostname);
  } catch (error) {
    return false;
  }
};
