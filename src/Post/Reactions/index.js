import React from 'react';
import Likes from './Likes'
import Comments from './Comments'
import './reactions.css'

class Reactions extends React.Component{

    render() {
        return( 
            <div className='reactions'>
                <Likes likes={this.props.likes}/>
                <Comments comments={this.props.comments}/>
            </div>
        )
    }
}

export default Reactions
