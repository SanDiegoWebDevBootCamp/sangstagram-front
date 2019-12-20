import React from 'react';
import Typography from '@material-ui/core/Typography';
import ChatBubbleIcon from '@material-ui/icons/ChatBubble';

const Comments = ({ comments }) => (
    <Typography>
        <ChatBubbleIcon />
        {' '}
        {comments.length}
    </Typography>
);

export default Comments;
