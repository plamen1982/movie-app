import React, {useEffect, useState} from "react";
import { connect } from 'react-redux';
import { createMovie } from '../actions/movie-actions';

function CreateMovie(props) {
    const [name, setName] = useState('');
    const [releasedOn, setReleasedOn] = useState('');
    const [disk, setDisk] = useState(1);

    function handleSubmit(event) {
        event.preventDefault();
        const movieObject = {
            name,
            disk,
            released_on: releasedOn
        }
        props.createMovie(movieObject);
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


const mapDispatchToProps = {
    createMovie
  }
   
export default connect(null, mapDispatchToProps)(CreateMovie);