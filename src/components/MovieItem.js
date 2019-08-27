import React from 'react';
import { Link } from 'react-router-dom';
import { deleteMovie } from '../actions/movie-actions';
import { connect } from 'react-redux';

function MovieItem({ movie, deleteMovie }) {
    const border = {
        border: '1px solid black',
        padding: '1px',
        margin: '3px',
        backgroundColor: 'white',
        cursor: 'pointer',
        fontSize: '15px',
        textDecoration: 'none'
      }
    const movieId = movie._id;

    function handleDelete() {
        deleteMovie(movieId);
    }

    return(
        <>
            <div key={movie._id} style={border}></div>
            <div>Name: {movie.name}</div>
            <div>Released On: {movie.released_on}</div>
            <div>Number of Disks: {movie.disk}</div>
            <div>Is Movie Watched: {movie.isWatched ? 'Yes' : 'No'}</div>
            <Link to={`/movie/${movie._id}`} style={border}>Details</Link>
            <Link to={`/create`} style={border}>Create Movie</Link>
            <Link to={`/update/${movie._id}`} style={border}>Update</Link>
            <button onClick={handleDelete} style={border}>Delete Movie</button>
        </>
    )
}

const mapDispatchToProps = {
    deleteMovie
  }
  
export default connect(null, mapDispatchToProps)(MovieItem);