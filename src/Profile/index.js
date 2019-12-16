import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import SignIn from './SignIn';

const Profile = () => {
    const [shouldDisplaySignIn, setShouldDisplaySignIn] = useState(false);

    // declare event handler
    const buttonClicked = () => setShouldDisplaySignIn(true);

    if (shouldDisplaySignIn) {
        return (
            <p>Profile</p>
        );
    }

    return (
        <Button onClick={buttonClicked} variant="contained" color="primary">
            <SignIn />
        </Button>
    );
};

export default Profile;
