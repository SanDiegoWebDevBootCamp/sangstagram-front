import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import NavBar from './NavBar';
import Posts from '../Posts';
import Following from '../Following';
import Profile from '../Profile';
import NewPost from '../Post/New';
import Login from '../Login';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.paper,
    },
}));

function Navigation({ onLogin }) {
    const classes = useStyles();
    return (
        <Router>
            <div className={classes.root}>
                <NavBar />
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
                    <Route path="/newpost">
                        <NewPost />
                    </Route>
                    <Route path="/login">
                        <Login onLogin={onLogin} />
                    </Route>

                </Switch>
            </div>
        </Router>

    );
}

export default Navigation;
