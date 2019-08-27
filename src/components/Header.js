import React, { useState, useEffect } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { filterMovies } from '../actions/movie-actions';
import { getAllMoviesAction } from '../actions/movie-actions';

function Header(props) {
    const [searchTerm, setSearchTerm] = useState('');
    useEffect(() => {}, [searchTerm]);

    function handleInputChange(event) {
        let value  = event.target.value;
        setSearchTerm(value);
    }

    function handleSearch() {
       props.filterMovies(searchTerm);
    }

    function resetSearch() {
        debugger;
        setSearchTerm('');
        props.getAllMoviesAction();
    }

    const styles = {
        width: '230px'
    }
    return(
        <div className="App">
            <input onChange={handleInputChange} placeholder="Search for a movie by name" value={searchTerm} style={styles}/>
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
