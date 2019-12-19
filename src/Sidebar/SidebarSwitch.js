import React from 'react';
import clsx from 'clsx';
import Typography from '@material-ui/core/Typography';
import SidebarStylesUsage from './SidebarStyles';

const classes = useStyles();
const [open] = React.useState(false);

const SideBarSwitch = () => (
    <main className={clsx(classes.content, { [classes.contentShift]: open })}>
        <div className={classes.drawerHeader} />
        <Typography paragraph>
            Post text here
        </Typography>
        <Typography paragraph>
            Post text here
        </Typography>
    </main>
);

export default SideBarSwitch;
