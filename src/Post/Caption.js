import React from 'react';
import Typography from '@material-ui/core/Typography';

class Caption extends React.Component {
    render() {
        return (
            <Typography variant="h6" gutterBottom>
                {this.props.caption}
            </Typography>
        )
    }
}

export default Caption;