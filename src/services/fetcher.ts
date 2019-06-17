interface FetchParams { query: { [key: string]: string | number }; }

const fetchData = async (url: string, params: FetchParams) => {
  const query = Object.keys(params.query).map((key) => {
    const value = params.query[key];
    return `${key}=${value}`;
  })
  .join("&");
  const endpointURL = `${url}?${query}`;
  return fetch(endpointURL)
    .then((response) => response.json());
};

export { fetchData };
