/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import LinkTab from './LinkTab';

function a11yProps(index) {
    return {
        id: `nav-tab-${index}`,
        'aria-controls': `nav-tabpanel-${index}`,
    };
}

const NavBar = () => (
    <AppBar position="static">
        <Tabs
            variant="fullWidth"
            aria-label="nav tabs example"
        >
            <LinkTab label="Posts" href="/" {...a11yProps(0)} />
            <LinkTab label="Following" href="/following" {...a11yProps(1)} />
            <LinkTab label="Profile" href="/profile" {...a11yProps(2)} />
        </Tabs>
    </AppBar>
);

export default NavBar;
