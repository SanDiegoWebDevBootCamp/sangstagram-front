import React, { useState } from 'react';
import useForm from 'react-hook-form';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import './NewComment.css';

const NewComment = ({ onSubmit }) => {

    const [shouldDisplayNewComment, setShouldDisplayNewComment] = useState(false);
    const {
        register, handleSubmit,
    } = useForm();

    // declare event handler
    const buttonClicked = () => setShouldDisplayNewComment(true);

    if (shouldDisplayNewComment) {
        return (
            <form onSubmit={handleSubmit(onSubmit)} className="newComment">
                <TextField
                    id="standard-basic"
                    label="New comment"
                    multiline
                    rowsMax="4"
                    inputRef={register({ required: true })}
                    name="comment"
                />
                <Button type="submit">Submit</Button>
            </form>
        );
    }

    return (
        <Button onClick={buttonClicked} variant="contained" color="primary">
            New Comment
        </Button>
    );
};

export default NewComment;
