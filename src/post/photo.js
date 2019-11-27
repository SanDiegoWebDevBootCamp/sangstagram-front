import React from 'react';

class Photo extends React.Component {
    render() {
        return (
            <img src={this.props.photoUrl} />
        )
    }
}

export default Photo;
