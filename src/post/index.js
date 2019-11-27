import React from 'react';
import Photo from './photo';
import Caption from './caption';
import PublishedDate from './publishedDate'

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