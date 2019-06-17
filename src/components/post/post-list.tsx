import * as React from "react";
import { Post } from "./post";

import { PostNS } from "./post-ns";

const mapPostDataToComponent =
  (postData: PostNS.PostData) => <Post key={postData.id} data={postData} />;

const PostList = (props: PostNS.PostListProps) => {
  const posts = props.postsData.map(mapPostDataToComponent);
  return (
    <div>{posts}</div>
  );
};

export { PostList };
