import React from 'react';
import Sangs from './ReactionSangs'
import Comments from './ReactionComments'
import './reactions.css'

class Reactions extends React.Component{
    
    render() {
        return( 
            <div className="reactions">
                <Sangs sangs={this.props.sangs}/>
                <Comments comments={this.props.comments}/>
            </div>
        )
    }
}

export default Reactions
