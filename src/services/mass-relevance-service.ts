const fetchLastPosts = async (feedURL: string, countOfPosts: number) => {
    const requestURL = `${feedURL}?limit=${countOfPosts}`;
    return fetch(requestURL)
        .then((response) => response.json());
};

export default fetchLastPosts;
