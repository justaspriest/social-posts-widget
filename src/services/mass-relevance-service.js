const fetchLastPosts = (feedURL, countOfPosts) => {
    const requestURL = `${feedURL}?limit=${countOfPosts}`;
    return fetch(requestURL)
        .then(response => response.json());
}

export default fetchLastPosts;