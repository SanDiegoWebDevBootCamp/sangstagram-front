import React from 'react';

class Caption extends React.Component {
    render() {
        return (
            <p>
                {this.props.caption}
            </p>
        )
    }
}

export default Caption;