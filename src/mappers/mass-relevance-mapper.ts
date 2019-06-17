import { PostNS } from "../components/post/post-ns";

const mapFeedToPostsData = (feed: []): PostNS.PostData[] => {
  return feed.map((data: PostNS.PostData) => {
    return {
      created_at: data.created_at,
      id: data.id,
      text: data.text,
      user: data.user,
    } as PostNS.PostData;
  });
};

export default mapFeedToPostsData;
