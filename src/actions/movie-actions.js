import { getAllMovies, createNewMovie } from '../services/movie-service';

export const UPDATE_MOVIE = 'movie:updateMovie';
export const GET_ALL_MOVIES = 'movies:getAllMovies';
export const SHOW_ERROR = 'movies:showError';
export const FILTER_MOVIES = 'movies:filterMovies';
export const CREATE_MOVIE = 'movie:createMovie';

export function getAllMoviesAction() {
    const action = {
        type: GET_ALL_MOVIES,
        payload: {
            movies: []
        }
    }
    return dispatch => {
        getAllMovies().then(results => {
            action.payload.movies = results.data.movies;
            dispatch(action);
        });      
    }
}

export function createMovie(newMovie) {
    const action = {
        type: GET_ALL_MOVIES,
        payload: {
            movies: []
        }
    }
    
    return dispatch => {
        createNewMovie(newMovie).then(results => {
            action.payload.movies = results.data.movies;
            dispatch(action);
        });      
    }
}

export function updateMovie(newMovie) {
    return {
        type: UPDATE_MOVIE,
        payload: {
            movie: newMovie
        }
    }
}

export function showError() {
    return {
        type: SHOW_ERROR,
        payload: {
            movie: 'ERROR'
        }
    }
}

export function filterMovies(searchTerm) {
    return {
        type: FILTER_MOVIES,
        payload: {
            filter: searchTerm
        }
    }
}