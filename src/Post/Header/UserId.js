import React from 'react';
import Typography from '@material-ui/core/Typography';

class UserId extends React.Component {
    render() {
        return (
            <Typography onClick={() => console.log(this.props.userId)}>
                {this.props.userId}
            </Typography>

        );
    }
}

export default UserId;
