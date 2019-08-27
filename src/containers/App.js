import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getAllMoviesAction } from '../actions/movie-actions';
import { Link } from 'react-router-dom';

function App(props) {

  useEffect (() => {
    props.getAllMoviesAction();
  }, []);
 
  const border = {
    border: '1px solid black',
    padding: '1px',
    margin: '3px'
  }

  return (
      <div>
        {props.movies.length > 0 ? props.movies.map(movie => (
          <div key={movie._id} style={border}>
            <div>Name: {movie.name}</div>
            <div>Released On: {movie.released_on}</div>
            <div>Number of Disks: {movie.disk}</div>
            <div>Is Movie Watched: {movie.isWatched ? 'Yes' : 'No'}</div>
            <Link to={`/create`} style={border}>Create Movie</Link>
            <Link to={`/update/${movie.id}`} style={border}>Update</Link>
            <Link to={`/delete/${movie._id}`} style={border}>Delete Movie</Link>
          </div>
      ))
      : <div>No movie with that search, please reset</div>
    }
      </div>
  );
}


function mapStateToProps(state, props) {
 return { 
    movies: state.movies
  }
}

const mapDispatchToProps = {
  getAllMoviesAction
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
