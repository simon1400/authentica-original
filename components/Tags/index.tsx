import Link from "next/link";
import { FC } from "react";
import { removeMarkdown } from "utility/removeMarkdown";
import { TagsC } from "./styles";

interface ITags {
  title: string;
  data: any[]
}

const Tags: FC<ITags> = ({
  title,
  data
}) => {
  return (
    <TagsC>
      <label>{title}</label>
      <ul>
        {data.map((item ,index) => <li key={index}>
          <Link href={'/'+item.attributes.slug} passHref>
            <a>{removeMarkdown(item.attributes.title)}</a>
          </Link>
        </li>)}
      </ul>
    </TagsC>
  )
}

export default Tags