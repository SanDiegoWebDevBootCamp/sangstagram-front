import React from 'react';
import Box from '@material-ui/core/Box';
import Photo from './Photo';
import Caption from './Caption';
import Header from './Header';
import Reactions from './Reactions';
import Comments from './Comments';
import './Post.css';

const Post = ({ post }) => {
    const {
        photoUrl, caption, datePublished, user, likes, comments,
    } = post;
    const publishedDate = new Date(datePublished);
    const { username } = user;

    return (
        <>
            <Header publishedDate={publishedDate} userId={username} />
            <div className="wrapper">
                <Box p={1} className="left">
                    <Photo photoUrl={photoUrl} />
                    <Caption caption={caption} />
                    <Reactions likes={likes} comments={comments} />
                </Box>
                <Box p={1} className="right">
                    <Comments comments={comments} />
                </Box>
            </div>
        </>
    );
};

export default Post;
