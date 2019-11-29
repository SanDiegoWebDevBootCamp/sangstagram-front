import React from 'react';
import PublishedDate from './PublishedDate'
import UserId from './UserId'

class Header extends React.Component{

    render() {
        return( 
            <>
                <PublishedDate publishedDate={this.props.publishedDate}/>
                <UserId userId={this.props.userId}/>
            </>
        )
    }
}

export default Header
