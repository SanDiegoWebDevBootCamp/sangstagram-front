import React from 'react';
import PublishedDate from './PublishedDate';
import UserId from './UserId';
import './header.css';

class Header extends React.Component {
    render() {
        return (
            <div className="header">
                <PublishedDate publishedDate={this.props.publishedDate} />
                <UserId userId={this.props.userId} />
            </div>
        );
    }
}

export default Header;
