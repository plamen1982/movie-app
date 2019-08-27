import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { updateMovie } from './actions/movie-actions';
import { getAllMoviesAction } from './actions/movie-actions';
import { getAllMovies } from './services/movie-service';

function App(props) {

  const [searchTerm, setSearchTerm] = useState('');
  const [filteredMovies, setFilteredMovies] = useState(props.movies);

  useEffect (() => {
    getAllMovies().then(result => {
      const movies = result.data.movies;

      setFilteredMovies(movies);
      props.getAllMoviesAction(movies);
    });
  }, [])
 
  function handleSearch() {
    if(searchTerm.length === 0) {
      setFilteredMovies(props.movies)
    } else {
      const searchedMovies = filteredMovies.filter(movie => {
        if(movie.name) {
          return movie.name.includes(searchTerm);
        }
      });
      setFilteredMovies(searchedMovies);
    }
  }
  
  return (
    <>
      <div className="App">
        <input onChange={(event) => setSearchTerm(event.target.value)} placeholder="Search for a movie"/>
        <button onClick={handleSearch}>Search</button>  
      </div>
      <div>
        {filteredMovies.length > 0 && filteredMovies.map(movie => (
        <div>{movie.name}</div>
      ))}
      </div>
    </>
  );
}


function mapStateToProps(state, props) {
 return { 
    movies: state.movies
  }
}

const mapDispatchToProps = {
  getAllMoviesAction,
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
