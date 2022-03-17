import {
  API_URL, BASE_URL, API_KEY, UPCOMING_MOVIE_URL,
} from './constant';

async function getMovies(page) {
  try {
    const res = await fetch(`${API_URL}&page=${page}`);
    const movieData = await res.json();
    return movieData;
  } catch (err) {
    console.log(err);
  }
  return null;
}

async function getMovieDetail(id) {
  try {
    const res = await fetch(`${BASE_URL}/movie/${id}?${API_KEY}&append_to_response=credits`);
    const movieDetail = await res.json();
    return movieDetail;
  } catch (err) {
    console.log(err);
  }
  return null;
}

async function getUpcomingMovie() {
  try {
    const res = await fetch(UPCOMING_MOVIE_URL);
    return res.json();
  } catch (err) {
    console.log(err);
  }
  return null;
}

export default getMovies;
export {
  getMovieDetail, getUpcomingMovie,
};
