import $ from 'jquery';
export const UPDATE_MOVIE = 'movie:updateMovie';
export const GET_ALL_MOVIES = 'movies:getAllMovies';
export const SHOW_ERROR = 'movies:showError';

export function getAllMoviesAction(movies) {
 
    return {
        type: GET_ALL_MOVIES,
        payload: {
            // status: moviesData.data.state,
            // message: moviesData.data.message,
            movies,
        }
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