import React, { useState } from 'react';
import fetchLastPosts from '../services/MassRelevanceService';

import useInterval from '../helpers/use-interval';
import Post from './post/post.jsx';

const SocialPostsWidget = (props) => {
    let [posts, setPosts] = useState([]);

    const fetchPosts = async () => {
        const posts = await fetchLastPosts(props.feedURL, props.countOfPosts);
        setPosts(posts);
    }

    useInterval(() => {
        fetchPosts();
    }, props.refreshInterval, true);

    return (
        <div>
            <h3>Social Posts Widget</h3>
            { posts.map((post) => <Post key={post.id} data={post} />) }
        </div>
    );
};

export default SocialPostsWidget;