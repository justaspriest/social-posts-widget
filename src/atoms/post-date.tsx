import * as React from "react";

import { Post } from "../index-ns";
import { dateFormat } from "../lib/date";

const PostDate = (props: Post.DateProps) => {
  const dateEntry = dateFormat(props.date);
  return (
    <p>{dateEntry}</p>
  );
};

export { PostDate };
