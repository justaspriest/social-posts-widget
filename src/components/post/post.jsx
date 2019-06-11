import React from 'react';

import PostDate from './post-date.jsx';

const Post = (props) => {
    const post = props.data;

    return (
        <div key={ post.id }>
            <p>{ post.user }</p>
            <PostDate date={post.date} format="DD.MM.YYYY HH:mm"/>
            <p>{ post.text }</p>
        </div>
    );
};

export default Post;