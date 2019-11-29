import React from 'react';

class Likes extends React.Component {
    render() {
        return (
            <p>
                {this.props.likes}
            </p>
        )
    }
}

export default Likes;