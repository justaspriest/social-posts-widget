import * as React from "react";

import { dateFormat } from "../../helpers/date";
import { Post } from "../../index-ns";

const PostDate = (props: Post.DateProps) => {
  const dateEntry = dateFormat(props.date);
  return (
    <p>{dateEntry}</p>
  );
};

export { PostDate };
