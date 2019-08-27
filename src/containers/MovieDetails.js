import React from "react";
import { connect } from 'react-redux';
import MovieItem from '../components/MovieItem';

function MovieDetails(props) {
    const { match: { params: { movieId } } } = props;
    const currentMovie = props.movies.find(movie => movie._id === movieId);

    const border = {
        border: '1px solid black',
        padding: '1px',
        margin: '3px'
      }
    return(
        <MovieItem movie={currentMovie} areMovieDetails={true} />
    );
}

function mapStateToProps(state, props) {
    return { 
       movies: state.movies
    }
}
   
export default connect(mapStateToProps)(MovieDetails);