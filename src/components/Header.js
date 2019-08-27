import React, { useState, useEffect } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { filterMovies } from '../actions/movie-actions';
import { getAllMoviesAction } from '../actions/movie-actions';
import { withRouter } from "react-router-dom";

function Header(props) {
    const isMoviesPage = props.location.pathname.includes('movies');
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
        setSearchTerm('');
        props.getAllMoviesAction();
    }

    const styles = {
        width: '230px'
    }
    return(
        isMoviesPage && 
        <div className="App">
            <input onChange={handleInputChange} placeholder="Search for a movie by name" value={searchTerm} style={styles}/>
            <button onClick={handleSearch}>Search</button>  
            <button onClick={resetSearch}>Reset Search</button>  
            <div>Currently {props.movies.length} movies listed</div>
        </div>
    )
}

const mapDispatchToProps = (dispatch) => {
    return  bindActionCreators({ 
            filterMovies,
            getAllMoviesAction
    }, dispatch);
}

function mapStateToProps(state) {
    return { 
       movies: state.movies
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Header));
