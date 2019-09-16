import React, { useState } from "react";
import { connect } from 'react-redux';
import { updateMovie } from '../actions/movie-actions';
import { Form, Button } from 'react-bootstrap';

function CreateMovie(props) {
    const { match: { params: { movieId } } } = props;
    const currentMovie = props.movies.movies.find(movie => movie._id === movieId);

    const [name, setName] = useState(currentMovie.name);
    const [releasedOn, setReleasedOn] = useState(currentMovie.released_on);
    const [disk, setDisk] = useState(currentMovie.disk);

    function handleSubmit(event) {
        event.preventDefault();
        const movieObject = {
            name,
            disk,
            movieId,
            released_on: releasedOn,
        }
        props.updateMovie(movieObject);
        props.history.push('/');
    }

    function handleNameChange({ target: { value } }) {
        setName(value);
    }

    function handleReleasedOn({ target: { value } }) {
        setReleasedOn(value);
    }

    function handleNumberOfDisks({ target: { value } }) {
        setDisk(value);
    }

    const style = {
        marginBottom: '20px'
    }

    return(
        <Form onSubmit={handleSubmit}>
            <Form.Text className="text-muted">
                Movie Name
            </Form.Text>
            <Form.Control
                onChange={handleNameChange}
                value={name}
                name="name"
                placeholder="Movie Name"
                autoComplete="off"
                type="text"
                style={style}
            />
            <Form.Text className="text-muted">
                Released On
            </Form.Text>
            <Form.Control
                onChange={handleReleasedOn}
                value={releasedOn}
                name="releasedOn"
                placeholder="Released on: xx/xx/xxxx"
                autoComplete="off"
                type="text"
                style={style}
            />
            <Form.Text className="text-muted">
                Number of Disks
            </Form.Text>
            <Form.Control
                onChange={handleNumberOfDisks}
                value={disk}
                name="releasedOn"
                placeholder="Number of disk"
                autoComplete="off"
                type="number"
                style={style}
            />
            <Button className="button" type="submit" style={style}>Submit</Button>
        </Form>
    );
}

function mapStateToProps(state) {
    return { 
       movies: state.movies
     }
   }

const mapDispatchToProps = {
    updateMovie
  }
   
export default connect(mapStateToProps, mapDispatchToProps)(CreateMovie);