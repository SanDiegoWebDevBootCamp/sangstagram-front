import React from 'react';
import PublishedDate from './PublishedDate';
import UserId from './UserId';
import './header.css';

const Header = ({ userId, publishedDate }) => (
    <div className="header">
        <PublishedDate publishedDate={publishedDate} />
        <UserId userId={userId} />
    </div>
);

export default Header;
