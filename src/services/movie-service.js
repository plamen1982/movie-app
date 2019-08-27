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
 * create movie
 * @returns {Promise} 
 */

export function createNewMovie(newMovie) {
    const movieUrl = `${baseUrl}/movies`;
    return post(movieUrl, newMovie);
}