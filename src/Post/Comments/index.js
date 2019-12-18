import React from 'react';
import List from '@material-ui/core/List';
import Comment from './Comment';
import NewComment from './NewComment';

const renderComment = ({ user, comment, date }) => (
    <Comment user={user} comment={comment} date={new Date(date)} />
);

const Comments = ({ comments, onNewComment }) => (
    <>
        <List>
            {comments.map((comment) => renderComment(comment))}
        </List>
        <NewComment onSubmit={onNewComment} />
    </>
);

export default Comments;
