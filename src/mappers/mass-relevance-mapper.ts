import { PostNS } from "../components/post/post-ns";

const mapFeedToPostsData = (feed: []): PostNS.IData[] => {
    return feed.map((data: PostNS.IData) => {
        return {
            created_at: data.created_at,
            id: data.id,
            text: data.text,
            user: data.user,
        } as PostNS.IData;
    });
};

export default mapFeedToPostsData;
