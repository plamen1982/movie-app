import React, { useState } from "react";
import { connect } from 'react-redux';
import { createMovie } from '../actions/movie-actions';
import { Form, Button } from 'react-bootstrap';

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
                placeholder="Number of Disks"
                autoComplete="off"
                type="number"
                style={style}
            />
            <Button className="button" type="submit" style={style}>Create Movie</Button>
        </Form>
    );
}


const mapDispatchToProps = {
    createMovie
  }
   
export default connect(null, mapDispatchToProps)(CreateMovie);