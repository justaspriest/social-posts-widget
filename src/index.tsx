import React, { useState } from "react";

import { compareDateEntries } from "./helpers/date";
import useInterval from "./helpers/use-interval";
import fetchLastPosts from "./services/mass-relevance-service";

import { PostList } from "./components/post/post-list";
import { PostNS } from "./components/post/post-ns";
import { Title } from "./components/title/title";
import { SocialPostsWidgetNS } from "./index-ns";

const filterOldPosts = (postData: PostNS.PostData, latestPostDate?: string) => {
  if (latestPostDate) {
    return compareDateEntries(postData.created_at, latestPostDate) > 0;
  }

  return true;
};

const SocialPostsWidget = (props: SocialPostsWidgetNS.IWidgetProps) => {
  const [posts, setPosts] = useState<PostNS.PostData[]>([]);

  const fetchPosts = async () => {
    const countOfPosts = props.countOfPosts;
    const fetchedPosts = await fetchLastPosts(props.feedURL, countOfPosts);
    const latestPostDateEntry =
      posts.length > 0 ? posts[0].created_at : undefined;
    const newPosts = fetchedPosts
      .filter((postData: PostNS.PostData) => filterOldPosts(
        postData, latestPostDateEntry,
      ))
      .slice(0, countOfPosts);

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
    <React.Fragment>
      <Title text="Social Posts Widget" />
      <PostList postsData={posts} />
    </React.Fragment>
  );
};

export default SocialPostsWidget;
