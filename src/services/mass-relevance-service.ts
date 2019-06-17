import mapFeedToPostsData from "../mappers/mass-relevance-mapper";

const fetchLastPosts = async (feedURL: string, countOfPosts: number) => {
  const requestURL = `${feedURL}?limit=${countOfPosts}`;
  return fetch(requestURL)
    .then((response) => response.json())
    .then((feed: []) => mapFeedToPostsData(feed));
};

export default fetchLastPosts;
