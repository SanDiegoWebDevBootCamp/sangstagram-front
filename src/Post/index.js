import React from 'react';
import Photo from './Photo';
import Caption from './Caption';
import Header from './Header';
import Reactions from './Reactions';
import Comments from './Comments';

class Post extends React.Component {
    render() {
        const { post } = this.props;
        console.log('post', post);
        const {
            photoUrl, caption, datePublished, user, likes, comments,
        } = post;
        const publishedDate = new Date(datePublished)
        const { username } = user;

        return (
            <>
                <Header publishedDate={publishedDate} userId={username} />
                <Photo photoUrl={photoUrl} />
                <Caption caption={caption} />
                <Reactions likes={likes} comments={comments} />
                <Comments comments={comments} />
            </>
        );
    }
}

export default Post;
