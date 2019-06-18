interface Feed  {
  id: number;
  created_at: string;
  text: string;
  user: { name: string; };
}

const feedToPostsData = ({ created_at: createdAt, id, text, user: { name: userName }}: Feed) => ({
  created_at: createdAt,
  id,
  text,
  userName,
});

const mapFeedToPostsData = (feed: Feed[]) => feed.map(feedToPostsData);

export { mapFeedToPostsData };
