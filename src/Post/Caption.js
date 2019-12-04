import React from 'react';
import Typography from '@material-ui/core/Typography';

const Caption = (props) => {
    const { caption } = props;

    return (
        <Typography variant="h6" gutterBottom>
            {caption}
        </Typography>
    );
};

export default Caption;
