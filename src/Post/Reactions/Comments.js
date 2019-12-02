import React from 'react';
import Typography from '@material-ui/core/Typography'

class Comments extends React.Component {
    render() {
        return (
            <Typography>
                Comments {this.props.comments.length}
            </Typography>
        )
    }
}

export default Comments;