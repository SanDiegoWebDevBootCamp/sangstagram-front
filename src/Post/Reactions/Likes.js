import React from 'react';
import Typography from '@material-ui/core/Typography';

const Likes = ({ likes }) => (
    <Typography>
        Likes
        {' '}
        {likes}
    </Typography>
);

export default Likes;
