import React from 'react';
import PublishedDate from './publishedDate'
import UserId from './userId'

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