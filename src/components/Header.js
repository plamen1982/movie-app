import React, { useState, useEffect } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { filterMovies } from '../actions/movie-actions';
import { getAllMoviesAction } from '../actions/movie-actions';
import { withRouter } from "react-router-dom";
import { Navbar, Form, FormControl, Button, Alert } from 'react-bootstrap';

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
        margin: '20px'
    }
    return(
        isMoviesPage && 
        <>
            <Navbar bg="light" expand="lg">
                <Form inline>
                    <FormControl type="text" className="mr-sm-2" onChange={handleInputChange} placeholder="Search for a movie by name" value={searchTerm}/>
                    <Button variant="outline-success" onClick={handleSearch}>Search</Button>
                    <Button variant="outline-success" onClick={resetSearch} style={styles}> Reset Search</Button>
                </Form>
            </Navbar>
            <Alert variant="info">Currently {props.movies.length} movies listed</Alert>
        </> 
        
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
