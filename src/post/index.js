import React from 'react';
import React from 'react';
import Photo from './photo';
import Caption from './caption';

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