import React from 'react'
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';

const Comment = ({user, comment, date}) => {
    return (
        <ListItem>
            <ListItemAvatar>
                <Avatar alt={user.name} src={user.avatar} />
            </ListItemAvatar>
            <ListItemText
                primary={comment}
                secondary={date.toDateString()}
            />
        </ListItem>
    )
}

export default Comment
