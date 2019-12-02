import React from 'react'
import List from '@material-ui/core/List';
import Comment from './Comment'

const Comments = ({comments}) => {

    return (
        <List>
            {comments.map(comment => (<Comment {...comment} />))}
        </List>
    )
}

export default Comments
