import React from 'react';
import Likes from './Likes'
import Comments from './Comments'

class Reactions extends React.Component{

    render() {
        return( 
            <>
                <Likes/>
                <Comments/>
            </>
        )
    }
}

export default Reactions
