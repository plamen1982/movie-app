import { 
        UPDATE_MOVIE, 
        GET_ALL_MOVIES,
        FILTER_MOVIES,
        CREATE_MOVIE
    } from '../actions/movie-actions';

export default function movieReducer(state = [], { type, payload }) {
    switch(type) {
        case CREATE_MOVIE:
            return [...payload.movies];

        case UPDATE_MOVIE:
            return [...payload.movies];

        case GET_ALL_MOVIES:
            return [...payload.movies];

        case FILTER_MOVIES:
            return state.filter(movie => { 
                    if(movie.name) {
                    return movie.name.toLowerCase().includes(payload.filter.toLowerCase());
                    }
                });

        default: return state;
    }
}