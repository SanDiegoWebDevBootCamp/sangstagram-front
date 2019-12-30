import React, { useState, useEffect } from 'react';
import DropzoneArea from 'react-dropzone-material-ui';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import './new.css';


const NewPost = () => {
    const [files, setFiles] = useState();
    const dropzoneText = 'Drag/drop files or click here to upload!';

    useEffect(() => {
        console.log(files);
    }, [files]);

    return (
        <div className="form">
            <DropzoneArea onChange={setFiles} dropzoneText={dropzoneText} />
            <TextField id="standard-basic" label="Caption" />
            <Button variant="contained">Submit</Button>
        </div>
    );
};

export default NewPost;
