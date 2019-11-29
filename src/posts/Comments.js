import React from 'react';

class Comments extends React.Component {
    render() {
        return (
            <p>
                {this.props.comments}
            </p>
        )
    }
}

export default Comments;