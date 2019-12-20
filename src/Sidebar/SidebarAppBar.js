import React from 'react';
import clsx from 'clsx';
import MenuIcon from '@material-ui/icons/Menu';
import IconButton from '@material-ui/core/IconButton';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import useStyles from './SidebarStyles';

const classes = useStyles();
const [open, setOpen] = React.useState(false);

const handleDrawerOpen = () => {
    setOpen(true);
};

const SidebarAppBar = () => (
    <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
            [classes.appBarShift]: open,
        })}
    >
        <Toolbar>
            <IconButton
                color="inherit"
                aria-label="open drawer"
                onClick={handleDrawerOpen}
                edge="start"
                className={clsx(classes.menuButton, open && classes.hide)}
            >
                <MenuIcon />
            </IconButton>
            <Typography variant="h6" noWrap>
            Home
            </Typography>
        </Toolbar>
    </AppBar>
);

export default SidebarAppBar;
