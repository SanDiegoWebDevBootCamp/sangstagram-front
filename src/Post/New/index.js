import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import Form from './Form';

const NewPost = () => {
    const [shouldDisplayForm, setShouldDisplayForm] = useState(false);

    // declare event handler
    const buttonClicked = () => setShouldDisplayForm(true);

    if (shouldDisplayForm) {
        return (
            <Form />
        );
    }

    return (
        <Button onClick={buttonClicked} variant="contained" color="primary">
                New Post
        </Button>
    );
};

export default NewPost;
