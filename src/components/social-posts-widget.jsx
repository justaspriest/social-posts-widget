import React, { useState } from 'react';
import { createMuiTheme } from '@material-ui/core/styles';
import blue from '@material-ui/core/colors/blue';
import { ThemeProvider } from '@material-ui/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import Toolbar from '@material-ui/core/Toolbar';
import PropTypes from 'prop-types';
import moment from 'moment';

import Post from './post/post.jsx';
import SocialPostsWidgetTitle from './title/title.jsx'

import fetchLastPosts from '../services/mass-relevance-service';
import useInterval from '../helpers/use-interval';

const widgetTheme = createMuiTheme({
    palette: {
        primary: blue
    }
});

const mapPostDataToComponent =
    (postData) => <Post key={postData.id} data={postData} />;
const filterOldPosts = (postData, latestPostDate) => {
    if (latestPostDate) {
        const latestDate = moment(latestPostDate);
        const postDate = moment(postData.created_at);
        return postDate.isAfter(latestDate);
    }

    return true;
};

const SocialPostsWidget = (props) => {
    let [posts, setPosts] = useState([]);

    const fetchPosts = async () => {
        const countOfPosts = props.countOfPosts;
        const fetchedPosts = await fetchLastPosts(props.feedURL, countOfPosts);
        const latestPostDateEntry =
            posts.length > 0 ? posts[0].props.data.created_at : undefined;
        const newPosts = fetchedPosts
            .filter(postData => filterOldPosts(postData, latestPostDateEntry))
            .slice(0, countOfPosts)
            .map(mapPostDataToComponent);

        const oldPostsCount = countOfPosts - newPosts.length;
        const oldPostsTail = posts.slice(0, oldPostsCount);

        const postComponents = newPosts.concat(oldPostsTail);
        setPosts(postComponents);
    }

    const defaultInterval = 300;
    const refreshInterval = props.refreshInterval > defaultInterval ?
        props.refreshInterval : defaultInterval;

    useInterval(() => {
        fetchPosts();
    }, refreshInterval, true);

    return (
        <ThemeProvider theme={widgetTheme}>
        //<React.Fragment>
            <CssBaseline />
            <SocialPostsWidgetTitle text="Social Posts Widget" />
            <Toolbar />
            <Container maxWidth="sm">
                { posts }
            </Container>
        //</React.Fragment>
        </ThemeProvider>
    );
};

SocialPostsWidget.propTypes = {
    feedURL: PropTypes.string,
    countOfPosts: PropTypes.number,
    refreshInterval: PropTypes.number
};

export default SocialPostsWidget;