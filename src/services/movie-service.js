import { get, post, remove } from '../data/api';

const baseUrl = 'https://afternoon-chamber-67331.herokuapp.com'; 

/**
 * get all movies
 * @returns {Promise} 
 */

export function getAllMovies() {
    const allMoviesUrl = `${baseUrl}/movies`;
    return get(allMoviesUrl);
}

/**
 * get movie by movieId
 * @returns {Promise} 
 */

export function getMovieById(movieId) {
    const movieUrl = `${baseUrl}/movie/${movieId}`;
    return get(movieUrl);
}