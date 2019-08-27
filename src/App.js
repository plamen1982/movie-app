import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { updateMovie } from './actions/movie-actions';
import { getAllMoviesAction } from './actions/movie-actions';
import { getAllMovies } from './services/movie-service';

function App(props) {
  debugger;
  const [movies, setMovies] = useState(props.movies);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect (() => {
    getAllMovies().then(result => {
      const movies = result.data.movies;
      
      setMovies(movies);
    });
  }, [movies])
 
  function onGetAllMovies({ target: { value } }) {
    props.onGetAllMovies(movies);
  }

  function handleOnChange(event) {
    debugger
  }
  
  return (
    <>
      <div className="App">
        <input onChange={handleOnChange} placeholder="Search for a movie"/>
        <button onClick={onGetAllMovies}>Search</button>
        {props.user}
      </div>
      <div>{movies.length > 0 && movies.map(movie => (
        <div>{movie.name}</div>
      ))}</div>
    </>
  );
}


function mapStateToProps(state, props) {
 return { 
    movies: state.movies
  }
}

const mapDispatchToProps = {
  onGetAllMovies: getAllMoviesAction,
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
