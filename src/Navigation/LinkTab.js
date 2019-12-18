import React from 'react';
import Tab from '@material-ui/core/Tab';
import { Link } from 'react-router-dom';

function LinkTab({ href, ...rest }) {
    return (
        <Tab
            component={Link}
            to={href}
            {...rest}
        />
    );
}

export default LinkTab;
