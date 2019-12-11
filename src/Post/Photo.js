import React from 'react';
import Box from '@material-ui/core/Box';
import './Post.css';

const style = {
    width: '26rem',
};

const Photo = ({ photoUrl }) => (
    <Box p={1}>
        <img alt="" src={photoUrl} style={style} />
    </Box>
);

export default Photo;
