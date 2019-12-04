import React from 'react';
import Typography from '@material-ui/core/Typography';

const UserId = (props) => {
    const { userId } = props;

    return (
        <Typography onClick={() => {}}>
            {userId}
        </Typography>
    );
};

export default UserId;
