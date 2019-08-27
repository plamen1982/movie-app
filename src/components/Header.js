import React, { useState } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { filterMovies } from '../actions/movie-actions';
import { getAllMoviesAction } from '../actions/movie-actions';

function Header(props) {
    const [searchTerm, setSearchTerm] = useState('');

    function handleSearch() {
       props.filterMovies(searchTerm);
    }

    function resetSearch() {
        props.getAllMoviesAction();
        setSearchTerm('');
    }

    return(
        <div className="App">
            <input onChange={(event) => setSearchTerm(event.target.value)} placeholder="Search for a movie"/>
            <button onClick={handleSearch}>Search</button>  
            <button onClick={resetSearch}>Reset Search</button>  
      </div>
    )
}


const mapDispatchToProps = (dispatch, props) => {
   return  bindActionCreators({ 
            filterMovies,
            getAllMoviesAction
    }, dispatch);
  }

export default connect(null, mapDispatchToProps)(Header);
