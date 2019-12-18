import React from 'react';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

const Caption = (props) => {
    const { caption } = props;

    return (
        <Box borderTop={2} borderBottom={2}>
            <Typography variant="h6" gutterBottom>
                <Box fontFamily="Monospace" fontSize="h6.fontSize" m={1}>
                    {caption}
                </Box>
            </Typography>
        </Box>
    );
};

export default Caption;
