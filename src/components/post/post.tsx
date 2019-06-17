import * as React from "react";

import mapTextToComponents from "../../mappers/map-text-to-components";
import { PostDate } from "./post-date";
import { PostNS } from "./post-ns";

const Post = (props: PostNS.IProps) => {
    const postData = props.data;

    const postDate = postData.created_at;
    const postText = postData.text;
    const userName = postData.user.name;

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
