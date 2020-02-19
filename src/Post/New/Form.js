import React, {
    useState, useEffect,
} from 'react';
import useForm from 'react-hook-form';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import DropzoneArea from 'react-dropzone-material-ui';
import './new.css';

const Form = ({ onSubmit }) => {
    const [files, setFiles] = useState([]);
    const dropzoneText = 'Drag/drop files or click here to upload!';
    const acceptedFiles = ['image/*'];
    const filesLimit = 1;
    const {
        register, handleSubmit, errors, setValue,
    } = useForm();

    useEffect(() => {
        register({ name: 'photo' });
        console.log(files);
    }, [files, register]);

    const onFormSubmit = ({ caption, photo }) => {
        if (photo) {
            onSubmit({ caption, photo });
        }
    };

    const handleOnChange = (dropzoneFiles) => {
        setFiles(dropzoneFiles);
        if (dropzoneFiles.length > 0) {
            setValue('photo', dropzoneFiles[0]);
        }
    };

    return (
        <form onSubmit={handleSubmit(onFormSubmit)} className="form">
            <DropzoneArea
                onChange={handleOnChange}
                dropzoneText={dropzoneText}
                acceptedFiles={acceptedFiles}
                filesLimit={filesLimit}
            />
            {errors.photo && <span>Photo is required</span>}
            <TextField
                id="standard-basic"
                label="Caption"
                inputRef={register({ required: true })}
                name="caption"
            />
            {errors.caption && <span>Caption is required</span>}
            <Button type="submit">Submit Post</Button>
        </form>
    );
};

export default Form;
