import React from 'react';
import publishedDate from './publishedDate'

class Header extends React.Component{

    render() {
        return( 
            <>
                <publishedDate/>
                <userId/>
            </>
        )
    }
}

export default Header