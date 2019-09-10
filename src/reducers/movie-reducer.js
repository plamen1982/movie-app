import {
        UPDATE_MOVIE,
        SET_ALL_MOVIES,
        FILTER_MOVIES,
        CREATE_MOVIE
    } from '../actions/movie-actions';

const DEFAULT_STATE = {
    movies: [],
    searchTerm: ''
}

// default state should be []
// use this reducers to store only movies
export default function movieReducer(state = DEFAULT_STATE, { type, payload }) {
    switch(type) {
        case CREATE_MOVIE:
            return { movies: [...payload.movies], searchTerm: ''};

        case UPDATE_MOVIE:
            return { movies: [...payload.movies], searchTerm: ''};

        case SET_ALL_MOVIES:
            return {
                ...state,
                movies: [...payload]
            };

        case FILTER_MOVIES:
            return { movies: state, searchTerm: payload.filter };

        default: return state;
    }
}
