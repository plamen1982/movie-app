import React from "react";
import { connect } from 'react-redux';

function MovieDetails(props) {
    const { match: { params: { movieId } } } = props;
    const currentMovie = props.movies.find(movie => movie._id === movieId);

    const border = {
        border: '1px solid black',
        padding: '1px',
        margin: '3px'
      }
    return(
        <div style={border}>
            <div>Name: {currentMovie.name}</div>
            <div>Released On: {currentMovie.released_on}</div>
            <div>Number of Disks: {currentMovie.disk}</div>
            <div>Is Movie Watched: {currentMovie.isWatched ? 'Yes' : 'No'}</div>
        </div>

    );
}

function mapStateToProps(state, props) {
    return { 
       movies: state.movies
    }
}
   
export default connect(mapStateToProps)(MovieDetails);