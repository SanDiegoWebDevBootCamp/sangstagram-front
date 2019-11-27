import React from 'react';
import Photo from './Photo';
import Caption from './Caption';
import PublishedDate from './PublishedDate'

class Post extends React.Component {
    render() {
        const { post, sang } = this.props;
        const { photoUrl, caption, publishedDate } = post;

        return (
            <>
                <PublishedDate publishedDate={publishedDate} />
                <Photo photoUrl={photoUrl} />
                <Caption caption={caption} />
            </>
        )
    }
}

export default Post;