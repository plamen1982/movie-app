import React, { useState } from "react";
import { connect } from 'react-redux';
import { updateMovie } from '../actions/movie-actions';

function CreateMovie(props) {
    const { match: { params: { movieId } } } = props;
    const currentMovie = props.movies.find(movie => movie._id === movieId);

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

    return(
        <form onSubmit={handleSubmit}>
            <input
                onChange={handleNameChange}
                value={name}
                name="name"
                placeholder="A name for your movie"
                autoComplete="off"
                type="text"
            />
            <input
                onChange={handleReleasedOn}
                value={releasedOn}
                name="releasedOn"
                placeholder="Released on: xx/xx/xxxx"
                autoComplete="off"
                type="text"
            />
            <input
                onChange={handleNumberOfDisks}
                value={disk}
                name="releasedOn"
                placeholder="Number of disk"
                autoComplete="off"
                type="number"
            />
            <button className="button" type="submit">Submit</button>
        </form>
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