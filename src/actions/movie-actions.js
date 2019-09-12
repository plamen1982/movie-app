import { getAllMovies, createNewMovie, updateExistMovie, deleteExistMovie } from '../services/movie-service';

export const UPDATE_MOVIE = 'movie:updateMovie';
export const SET_ALL_MOVIES = 'movies:setAllMovies';
export const FILTER_MOVIES = 'movies:filterMovies';
export const CREATE_MOVIE = 'movie:createMovie';

export const getAllMoviesAction = () => (dispatch) => {
    getAllMovies().then(result => {
        dispatch({
            type: SET_ALL_MOVIES,
            payload: result.data.movies
        });
    });
}

// export function getAllMoviesAction() {
//     const action = {
//         type: SET_ALL_MOVIES,
//         payload: {
//             movies: []
//         }
//     }
//     return dispatch => {
//         getAllMovies().then(results => {
//             action.payload.movies = results.data.movies;
//             dispatch(action);
//         });
//     }
// }

export function createMovie(newMovie) {
    const action = {
        type: CREATE_MOVIE,
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

export function deleteMovie(movieId) {
    const action = {
        type: CREATE_MOVIE,
        payload: {
            movies: []
        }
    }

    return dispatch => {
        deleteExistMovie(movieId).then(results => {
            action.payload.movies = results.data.movies;
            dispatch(action);
        });
    }
}

export function updateMovie(updatedMovie) {
    const action = {
        type: UPDATE_MOVIE,
        payload: {
            movies: []
        }
    }

    return dispatch => {
        updateExistMovie(updatedMovie).then(results => {
            action.payload.movies = results.data.movies;
            dispatch(action);
        });
    }
}

export function filterMovies(searchTerm) {
    debugger;
    return {
        type: FILTER_MOVIES,
        payload: {
            filter: searchTerm
        }
    }
}
