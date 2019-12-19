import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import SideBarDrawer from './SidebarDrawer';
import SideBarSwitch from './SidebarSwitch';
import SideBarAppBar from './SidebarAppBar';

function Sidebar() {
    return (
        <div className={classes.root}>
            <CssBaseline />
            <SideBarAppBar />
            <SideBarDrawer />
            <SideBarSwitch />
        </div>
    );
}

export default Sidebar;
