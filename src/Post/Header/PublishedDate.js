import React from 'react';
import Typography from '@material-ui/core/Typography';

class PublishedDate extends React.Component {
    render() {
        return (
            <Typography>
                {this.props.publishedDate.toLocaleDateString()}
                {' '}
                {this.props.publishedDate.toLocaleTimeString()}
            </Typography>

        );
    }
}

export default PublishedDate;
