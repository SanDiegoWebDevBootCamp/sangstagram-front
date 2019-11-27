import React from 'react';
import PublishedDate from './PublishedDate'
import UserId from './UserId'

class Header extends React.Component{

    render() {
        return( 
            <>
                <PublishedDate/>
                <UserId/>
            </>
        )
    }
}

export default Header
