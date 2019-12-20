import React from 'react';
import Button from '@material-ui/core/Button';

const Login = ({ onLogin }) => {
	console.log('onLogin', onLogin);
	return (
    <Button onClick={onLogin}>Login</Button>
)};

export default Login;
