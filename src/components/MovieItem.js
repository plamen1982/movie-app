import React from 'react';
import { Link } from 'react-router-dom';
import { deleteMovie } from '../actions/movie-actions';
import { connect } from 'react-redux';
import { Button, Card } from 'react-bootstrap';

function MovieItem({ movie, deleteMovie, areMovieDetails }) {
    const customStyles = {
        color: 'white',
        margin: '7px'
      }
    const movieId = movie._id;

    function handleDelete() {
        deleteMovie(movieId);
    }

    return(
        <Card style={{ width: '40rem' }}>
            <Card.Header>Movie Name: {movie.name}</Card.Header>
            <Card.Body>
            <Card.Title> Released On: {movie.released_on}</Card.Title>
            <Card.Text>
                Number of Disks: {movie.disk}
            </Card.Text>
            <Card.Text>
                Is Movie Watched: {movie.isWatched ? 'Yes' : 'No'}
            </Card.Text>
            {areMovieDetails ? 
                <div></div> : 
                <div>
                    <Button variant="primary" style={customStyles}><Link to={`/movie/${movie._id}`} style={customStyles}>Details</Link></Button>
                    <Button variant="success" style={customStyles}><Link to={`/create`} style={customStyles}>Create Movie</Link></Button>
                    <Button variant="warning" style={customStyles}><Link to={`/update/${movie._id}`} style={customStyles}>Update</Link></Button>
                    <Button variant="danger" onClick={handleDelete} style={customStyles}>Delete Movie</Button>
                </div>
            }

            </Card.Body>
        </Card>
    )
}

const mapDispatchToProps = {
    deleteMovie
  }
  
export default connect(null, mapDispatchToProps)(MovieItem);