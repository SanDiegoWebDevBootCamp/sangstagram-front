import React from 'react';
import Typography from '@material-ui/core/Typography';

const PublishedDate = (props) => {
    const { publishedDate } = props;

    return (
        <Typography>
            {publishedDate.toLocaleDateString()}
            {' '}
            {publishedDate.toLocaleTimeString()}
        </Typography>
    );
};

export default PublishedDate;
