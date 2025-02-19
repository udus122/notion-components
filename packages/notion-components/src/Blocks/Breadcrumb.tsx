import { Fragment } from "react";

import { extractTitle } from "@udus/notion-utils";
import { Icon } from "../Common/Icon";
import { useMapper } from "../hooks";
import { RichText } from "../RichText/RichText";

import type { BreadcrumbBlock } from "@udus/notion-types";

export const Breadcrumb: BreadcrumbBlock = ({ block }) => {
  const { Link } = useMapper();

  return (
    <div id={block.id} className="notion-block notion-breadcrumb">
      {block.breadcrumb.parents.map((pageOrDatabase, index, array) => {
        const titleRichText = extractTitle(pageOrDatabase);
        return (
          <Fragment key={pageOrDatabase.id}>
            <Link prefix="/" link={pageOrDatabase.id}>
              <span className="notion-breadcrumb-title">
                <Icon icon={pageOrDatabase.icon} />{" "}
                <RichText richText={titleRichText} />
              </span>
            </Link>
            {index !== array.length - 1 && (
              <span className="notion-breadcrumb-separator">/</span>
            )}
          </Fragment>
        );
      })}
    </div>
  );
};
