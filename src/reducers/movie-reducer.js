import { 
        UPDATE_MOVIE, 
        SHOW_ERROR,
        GET_ALL_MOVIES,
        FILTER_MOVIES,
    } from '../actions/movie-actions';

export default function movieReducer(state = [], { type, payload }) {
    switch(type) {
        case UPDATE_MOVIE:
            return state;
        case SHOW_ERROR:
            return state;
        case GET_ALL_MOVIES:
            return [...payload.movies];
        case FILTER_MOVIES:
            const filteredMovies = state.filter(movie => { 
                if(movie.name) {
                   return movie.name.toLowerCase().includes(payload.filter.toLowerCase());
                }
            });
            return filteredMovies;

        default: return state;
    }
}