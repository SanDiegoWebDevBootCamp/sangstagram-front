import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';

const UserAvatar = ({ user }) => (
    <ListItem>
        <ListItemAvatar>
            <Avatar alt={user.name} src={user.avatar} />
        </ListItemAvatar>
        <ListItemText
            primary={user.username}
        />
    </ListItem>
);

export default UserAvatar;
