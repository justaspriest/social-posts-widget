import React, { useState, useEffect } from 'react';
import fetchLastPosts from '../services/MassRelevanceService';

const SocialPostsWidget = (props) => {
    let [posts, setPosts] = useState([]);

    const fetchPosts = async () => {
        const posts = await fetchLastPosts(props.feedURL, props.countOfPosts);
        setPosts(posts);
    }

    useEffect(() => {
        fetchPosts();
    }, []);

    // {posts.map(post => (<p key={post.id}>{post.text}</p>))}

    return (
        <div>
            <h3>Social Posts Widget</h3>
            {JSON.stringify(posts)}
        </div>
    );
};

export default SocialPostsWidget;