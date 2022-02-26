export const API_KEY = 'api_key=1cf50e6248dc270629e802686245c2c8';
export const BASE_URL = 'https://api.themoviedb.org/3';
export const API_URL = `${BASE_URL}/discover/movie?sort_by=popularity.desc&${API_KEY}`;
export const API_URL_TV_SHOW = `${BASE_URL}/discover/tv?sort_by=popularity.desc&${API_KEY}`;
export const IMG_URL = 'https://image.tmdb.org/t/p/w500';
export const searchURL = `${BASE_URL}/search/movie?${API_KEY}`;
