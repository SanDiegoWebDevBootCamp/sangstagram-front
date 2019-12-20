import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Box from '@material-ui/core/Box';


const Comment = ({ user, comment, date }) => (
    <Box border={1} borderRadius={16}>
        <ListItem>
            <ListItemAvatar>
                <Avatar alt={user.name} src={user.avatar} />
            </ListItemAvatar>
            <ListItemText
                primary={comment}
                secondary={date.toDateString()}
            />
        </ListItem>
    </Box>
);

export default Comment;
