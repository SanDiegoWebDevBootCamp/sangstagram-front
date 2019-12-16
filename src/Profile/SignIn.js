import React from 'react';
import useForm from 'react-hook-form';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import './signin.css';

const SignIn = ({ onSubmit }) => {
    const {
        register, handleSubmit, errors,
    } = useForm();

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="signin">
            <TextField id="standard-basic" label="Username" inputRef={register({ required: true })} name="username" />
            {errors.username && <span>This field is required</span>}
            <TextField
                id="standard-password-input"
                label="Password"
                type="password"
                autoComplete="current-password"
                name="password"
                inputRef={register({ required: true })}
            />
            {errors.password && <span>This field is required</span>}
            <Button type="submit">Sign In</Button>
        </form>
    );
};

export default SignIn;
