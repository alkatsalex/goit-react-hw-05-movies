import axios from 'axios';

const url = 'https://api.themoviedb.org/3';

// https://api.themoviedb.org/3/movie/{movie_id}

async function trendingFetch() {
  const resp = await axios(
    `${url}/trending/movie/day?api_key=97e4ab2596be29617b1991836e844310`
  );
  const data = await resp.data;
  return data;
}

async function movieByIdFacth(id) {
  const resp = await axios(
    `${url}/movie/${id}?api_key=97e4ab2596be29617b1991836e844310`
  );
  const data = await resp.data;
  return data;
}

async function castFetch(id) {
  const resp = await axios(
    `${url}/movie/${id}/credits?api_key=97e4ab2596be29617b1991836e844310`
  );
  const data = await resp.data;
  return data;
}

async function reviewsFetch(id) {
  const resp = await axios(
    `${url}/movie/${id}/reviews?api_key=97e4ab2596be29617b1991836e844310`
  );
  const data = await resp.data;
  return data;
}

async function queryFetch(query) {
  const resp = await axios(
    `${url}/search/movie?query
=${query}&api_key=97e4ab2596be29617b1991836e844310`
  );
  const data = await resp.data;
  return data;
}

const api = {
  trendingFetch,
  movieByIdFacth,
  castFetch,
  reviewsFetch,
  queryFetch,
};
export default api;
