import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import LinkTab from './LinkTab';
import Posts from '../Posts';
import Following from '../Following';
import Profile from '../Profile';

function a11yProps(index) {
    return {
        id: `nav-tab-${index}`,
        'aria-controls': `nav-tabpanel-${index}`,
    };
}

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.paper,
    },
}));

function Navigation() {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <Router>
            <div className={classes.root}>
                <AppBar position="static">
                    <Tabs
                        variant="fullWidth"
                        value={value}
                        onChange={handleChange}
                        aria-label="nav tabs example"
                    >
                        <LinkTab label="Posts" href="/" {...a11yProps(0)} />
                        <LinkTab label="Following" href="/following" {...a11yProps(1)} />
                        <LinkTab label="Profile" href="/profile" {...a11yProps(2)} />
                    </Tabs>
                </AppBar>
                <Switch>
                    <Route exact path="/">
                        <Posts />
                    </Route>
                    <Route path="/following">
                        <Following />
                    </Route>
                    <Route path="/profile">
                        <Profile />
                    </Route>
                </Switch>
            </div>
        </Router>

    );
}

export default Navigation;
