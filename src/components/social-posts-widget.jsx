import React, { useState, useEffect, useRef } from 'react';
import fetchLastPosts from '../services/MassRelevanceService';

const mapPostDataToComponent = (post) => {
    return (
        <p key={post.id}>{post.text}</p>
    );
}

const useInterval = (callback, delay, preFire) => {
    const callbackRef = useRef();

    useEffect(() => {
        callbackRef.current = callback;
    }, [callback]);

    useEffect(() => {
        const tick = () => { callbackRef.current() };
        if (preFire) {
            tick();
        }
        if (delay !== null) {
            let id = setInterval(tick, delay);
            return () => clearInterval(id);
        }
    }, [delay]);
};

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
            { posts.map(mapPostDataToComponent) }
        </div>
    );
};

export default SocialPostsWidget;