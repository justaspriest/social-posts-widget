import * as React from "react";

import { Post as PostNS } from "../../index-ns";
import mapTextToComponents from "../../mappers/map-text-to-components";
import { PostDate } from "./post-date";

const Post = (props: PostNS.Props) => {
  const postData = props.data;

  const postDate = postData.created_at;
  const postText = postData.text;
  const userName = postData.userName;

  return (
    <div>
      <h5>{userName}</h5>
      <PostDate date={postDate}/>
      <div>
        {mapTextToComponents(postText)}
      </div>
    </div>
  );
};

export { Post };
