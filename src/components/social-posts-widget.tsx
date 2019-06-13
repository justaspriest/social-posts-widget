import { Container, CssBaseline, Toolbar } from "@material-ui/core";
import blue from "@material-ui/core/colors/blue";
import { createMuiTheme } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/styles";
import moment from "moment";
import React, { useState } from "react";

import useInterval from "../helpers/use-interval";
import fetchLastPosts from "../services/mass-relevance-service";

import Post from "./post/post";
import { PostNS } from "./post/post-ns";
import { SocialPostsWidgetNS } from "./social-posts-widget-ns";
import SocialPostsWidgetTitle from "./title/title";

const widgetTheme = createMuiTheme({
    palette: {
        primary: blue,
    },
});

const mapPostDataToComponent =
    (postData: PostNS.IData) => <Post key={postData.id} data={postData} />;

const filterOldPosts = (postData: PostNS.IData, latestPostDate?: string) => {
    if (latestPostDate) {
        const latestDate = moment(latestPostDate);
        const postDate = moment(postData.created_at);
        return postDate.isAfter(latestDate);
    }

    return true;
};

const SocialPostsWidget = (props: SocialPostsWidgetNS.IWidgetProps) => {
    const [posts, setPosts] = useState<SocialPostsWidgetNS.IPost[]>([]);

    const fetchPosts = async () => {
        const countOfPosts = props.countOfPosts;
        const fetchedPosts = await fetchLastPosts(props.feedURL, countOfPosts);
        const latestPostDateEntry =
            posts.length > 0 ? posts[0].props.data.created_at : undefined;
        const newPosts = fetchedPosts
            .filter((postData: PostNS.IData) => filterOldPosts(
                postData, latestPostDateEntry,
            ))
            .slice(0, countOfPosts)
            .map(mapPostDataToComponent);

        const oldPostsCount = countOfPosts - newPosts.length;
        const oldPostsTail = posts.slice(0, oldPostsCount);

        const postComponents = newPosts.concat(oldPostsTail);
        setPosts(postComponents);
    };

    const defaultInterval = 300;
    const refreshInterval = props.refreshInterval > defaultInterval ?
        props.refreshInterval : defaultInterval;

    useInterval(() => {
        fetchPosts();
    }, refreshInterval, true);

    return (
        <ThemeProvider theme={widgetTheme}>
            <CssBaseline />
            <SocialPostsWidgetTitle text="Social Posts Widget" />
            <Toolbar />
            <Container maxWidth="sm">
                {posts}
            </Container>
        </ThemeProvider>
    );
};

export default SocialPostsWidget;
