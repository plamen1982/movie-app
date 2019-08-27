import { get, post, put, remove } from '../data/api';

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

/**
 * update movie
 * @returns {Promise} 
 */

export function updateExistMovie(updatedMovie) {
    const movieId = updatedMovie.movieId;
    const movieUrl = `${baseUrl}/movies/${movieId}`;
    return put(movieUrl, updatedMovie);
}

/**
 * delete movie
 * @returns {Promise} 
 */

export function deleteExistMovie(movieId) {
    const movieUrl = `${baseUrl}/movies/${movieId}`;
    return remove(movieUrl);
}