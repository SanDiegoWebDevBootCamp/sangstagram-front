import React from 'react';
import Typography from '@material-ui/core/Typography';

const Comments = ({ comments }) => (
    <Typography>
        Comments
        {' '}
        {comments.length}
    </Typography>
);

export default Comments;
