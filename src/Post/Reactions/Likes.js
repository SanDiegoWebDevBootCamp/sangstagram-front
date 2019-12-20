import React from 'react';
import Typography from '@material-ui/core/Typography';
import FavoriteIcon from '@material-ui/icons/Favorite';

const Likes = ({ likes }) => (
    <Typography>
        <FavoriteIcon />
        {' '}
        {likes}
    </Typography>
);

export default Likes;
