import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { getAllMoviesAction } from '../actions/movie-actions';

function App(props) {

  useEffect (() => {
    props.getAllMoviesAction();
  }, []);
 

  return (
      <div>
        {props.movies.length > 0 && props.movies.map(movie => (
        <div>{movie.name}</div>
      ))}
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
