import React from 'react';
import Photo from './Photo';
import Caption from './Caption';

class Post extends React.Component {
    render() {
        const { post } = this.props;
        const { photoUrl, caption } = post;

        return (
            <>
                <Photo photoUrl={photoUrl} />
                <Caption caption={caption} />
            </>
        )
    }
}

export default Post;