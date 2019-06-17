import { MassRelevance, Post } from "../index-ns";

const feedToPostsData = ({ created_at: createdAt, id, text, user: { name: userName }}: MassRelevance.Feed) => ({
  created_at: createdAt,
  id,
  text,
  userName,
} as Post.Data);

const mapFeedToPostsData = (feed: MassRelevance.Feed[]) => feed.map(feedToPostsData);

export { mapFeedToPostsData };
