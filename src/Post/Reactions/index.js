import React from 'react';
import Likes from './Likes';
import Comments from './Comments';
import './reactions.css';

const Reactions = ({ likes, comments }) => (
    <div className="reactions">
        <Likes likes={likes} />
        <Comments comments={comments} />
    </div>
);

export default Reactions;
