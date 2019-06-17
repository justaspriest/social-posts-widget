import * as React from "react";

import { Post as PostNS } from "../../index-ns";
import { Post } from "./post";

const mapPostDataToComponent =
  (postData: PostNS.Data) => <Post key={postData.id} data={postData} />;

const PostList = (props: PostNS.ListProps) => {
  const posts = props.postsData.map(mapPostDataToComponent);
  return (
    <div>{posts}</div>
  );
};

export { PostList };
