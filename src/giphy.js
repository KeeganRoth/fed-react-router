export const fetchGiphyUrls = searchText => {
  const gifSearchApiUrl = `https://api.giphy.com/v1/gifs/search?api_key=vTDctUwdixKBz8tO3REnJC6QXi45yAmc&q=${searchText}&limit=10&rating=g&lang=en`;
  return fetch(gifSearchApiUrl)
    .then(res => res.json())
    .then(({ data }) => {
      console.log(data);
      const gifUrls = data.map(gifUrl => gifUrl.images.fixed_width.url);
      console.log(gifUrls);
      return gifUrls;
    });
};
