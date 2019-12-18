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

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.paper,
    },
}));

function Navigation({ onNewComment }) {
    const classes = useStyles();
    return (
        <Router>
            <div className={classes.root}>
                <NavBar />
                <Switch>
                    <Route exact path="/">
                        <Posts onNewComment={onNewComment}/>
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
