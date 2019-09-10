import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getAllMoviesAction } from '../actions/movie-actions';
import MovieItem from '../components/MovieItem';
import { Spinner, Button, ButtonToolbar } from 'react-bootstrap';

function App({movies, getAllMoviesAction}) {

  useEffect ((props) => {
    getAllMoviesAction();
  }, []);

  const border = {
    border: '1px solid black',
    padding: '1px',
    margin: '3px',
  }

  return (
      <div>
        {movies.length > 0 ?
          movies.map(movie => (
            <MovieItem movie={movie} style={border} key={movie._id}/>
      ))
      : <ButtonToolbar>
          <Button variant="primary" disabled>
            <Spinner
              as="span"
              animation="grow"
              size="sm"
              role="status"
              aria-hidden="true"
            />
            No movies found...
          </Button>
        </ButtonToolbar>
    }
      </div>
  );
}


function mapStateToProps(state) {
 return {
    movies: state.movies.movies // movies: getFileteredMovies(state)
  }
}

const mapDispatchToProps = {
  getAllMoviesAction
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
