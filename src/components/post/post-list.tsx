import * as React from "react";
import { Post } from "./post";

import { PostNS } from "./post-ns";

const mapPostDataToComponent =
    (postData: PostNS.IData) => <Post key={postData.id} data={postData} />;

const PostList = (props: PostNS.PostListProps) => {
    console.log(props);
    const posts = props.postsData.map(mapPostDataToComponent);
    return (
        <div>{posts}</div>
    );
};

export { PostList };