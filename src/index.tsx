import React, { useState } from "react";

import { compareDateEntries } from "./helpers/date";
import useInterval from "./helpers/use-interval";
import { mapFeedToPostsData } from "./mappers/mass-relevance-mapper";
import { fetchData } from "./services/fetcher";

import { PostList } from "./components/post/post-list";
import { Title } from "./components/title/title";
import { Post, Widget } from "./index-ns";

const MIN_INTERVAL = 300;

const filterOldPosts = (postData: Post.Data, latestPostDate?: string) => {
  if (latestPostDate) {
    return compareDateEntries(postData.created_at, latestPostDate) > 0;
  }
  return true;
};

const fetchMassRelevanceAPI = async (feedURL: string, countOfPosts: number) => {
  const params = {
    query: {
      limit: countOfPosts,
    },
  };
  return fetchData(feedURL, params)
    .then(mapFeedToPostsData);
};

const fetchPosts = async (
    feedURL: string,
    countOfPosts: number,
    posts: Post.Data[]) => {
  const fetchedPosts = await fetchMassRelevanceAPI(feedURL, countOfPosts);
  const latestPostDateEntry =
    posts.length > 0 ? posts[0].created_at : undefined;
  const newPosts = fetchedPosts
    .filter((postData: Post.Data) => filterOldPosts(
      postData, latestPostDateEntry,
    ))
    .slice(0, countOfPosts);

  const oldPostsCount = countOfPosts - newPosts.length;
  const oldPostsTail = posts.slice(0, oldPostsCount);

  return newPosts.concat(oldPostsTail);
};

const SocialPostsWidget = (props: Widget.Props) => {
  const [posts, setPosts] = useState<Post.Data[]>([]);

  const refreshInterval = props.refreshInterval > MIN_INTERVAL ?
    props.refreshInterval : MIN_INTERVAL;

  useInterval(async () => {
    const postsData =
      await fetchPosts(props.feedURL, props.countOfPosts, posts);
    setPosts(postsData);
  }, refreshInterval, true);

  return (
    <React.Fragment>
      <Title text="Social Posts Widget" />
      <PostList postsData={posts} />
    </React.Fragment>
  );
};

export default SocialPostsWidget;
