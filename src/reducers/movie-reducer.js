import { 
        UPDATE_MOVIE, 
        SHOW_ERROR,
        GET_ALL_MOVIES,
    } from '../actions/movie-actions';

export default function userReducer(state = [], { type, payload }) {
    debugger;

    switch(type) {
        case UPDATE_MOVIE:
            return payload.movie;
        case SHOW_ERROR:
            return payload.error;
        case GET_ALL_MOVIES:
            return payload.movies
        default: return state;
    }
}