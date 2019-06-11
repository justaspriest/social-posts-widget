
const mapFeedToPosts = feedData => {
    return {
        id: feedData.id,
        date: feedData.created_at,
        user: feedData.user.name,
        text: feedData.text
    }
}

const fetchLastPosts = (feedURL, countOfPosts) => {
    const requestURL = `${feedURL}?limit=${countOfPosts}`;
    return fetch(requestURL)
        .then(response => response.json())
        .then(data=> data.map(mapFeedToPosts));
}

export default fetchLastPosts;