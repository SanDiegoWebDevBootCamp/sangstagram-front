import React from 'react';
import List from '@material-ui/core/List';
import Comment from './Comment';

const renderComment = ({ user, comment, date }) => (
    <Comment user={user} comment={comment} date={date} />
);

const Comments = ({ comments }) => (
    <List>
        {comments.map((comment) => renderComment(comment))}
    </List>
);

export default Comments;
