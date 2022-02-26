import { API_URL, BASE_URL, API_KEY, API_URL_TV_SHOW } from "./constant";

async function getMovies(page) {
    try{
        const res = await fetch(`${API_URL}&page=${page}`);
        const movieData = await res.json();
        return movieData;
    }
    catch(err){
        console.log(err)
    }
}

async function getMovieDetail(id) {
    try{
    const res = await fetch(BASE_URL + '/movie/' + id + '?' + API_KEY + '&append_to_response=credits');
    const movieDetail = await res.json();
    return movieDetail;
    }
    catch(err){
        console.log(err)
    }
}

async function getTvShows(page) {
    try{
    const res = await fetch(`${API_URL_TV_SHOW}&page=${page}`);
    const tvShow = await res.json();
    return tvShow;
    }
    catch(err){
        console.log(err);
    }
}

async function getTvShowDetail(id) {
    const res = await fetch(BASE_URL + '/tv/' + id + '?' + API_KEY + '&append_to_response=credits');
    return await res.json();
}

export default getMovies;
export {getMovieDetail, getTvShows, getTvShowDetail};


// import { API_URL, BASE_URL, API_KEY } from './constant';

// async function getMovies(page) {
//     try {
//         const res = await fetch(`${API_URL}&page=${page}`);
//         const movieData = await res.json();
//         return movieData
//     }
//     catch (err) {
//         console.log(err);
//     }
// }

// async function getMovieDetail(id) {
//     try {
//         const res = await fetch(BASE_URL + '/movie/' + id + '?' + API_KEY + '&append_to_response=credits');
//         const movieDetail = await res.json();
//         return movieDetail;
//     }
//     catch (err) {
//         console.log(err);
//     }

// }

// export default getMovies;
// export { getMovieDetail };




// import { API_URL, BASE_URL, API_KEY } from './constant';

// async function getMovies(page) {
//     try {
//         const res = await fetch(`${API_URL}&page=${page}`);
//         const movieData = await res.json();
//         return movieData
//     }
//     catch (err) {
//         console.log(err);
//     }
// }

// async function getMovieDetail(id) {
//     try {
//         const res = await fetch(BASE_URL + '/movie/' + id + '?' + API_KEY + '&append_to_response=credits');
//         const movieDetail = await res.json();
//         return movieDetail;
//     }
//     catch (err) {
//         console.log(err)
//     }
// }
// export default getMovies;
// export { getMovieDetail }















// import {API_URL} from './constant';

// async function getMovies(page) {
//     try {
//         const res = await fetch(`${API_URL}&page=${page}`);
//         const movieData = await res.json();
//         return movieData
//     }
//     catch(err) {
//         console.log(err);
//     }
// }
// export default getMovies;



// import { API_URL } from "./constant";

// async function getMovies(page) {
//     try{
//         const res = await fetch(`${API_URL}&page=${page}`);
//         const movieData = await res.json();
//         return movieData;
//     }
//     catch(err) {
//         console.log(err)
//     }
// }
// export default getMovies;














