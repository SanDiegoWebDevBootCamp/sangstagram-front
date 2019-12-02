import React from 'react';
import Typography from '@material-ui/core/Typography'

class Likes extends React.Component {
    render() {
        return (
            <Typography>
                Likes {this.props.likes}
            </Typography>
        )
    }
}

export default Likes;