import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import PublishedDate from './PublishedDate';
import './header.css';

const Header = ({ user, publishedDate }) => (
    <div className="header">
        <PublishedDate publishedDate={publishedDate} />
        <Avatar alt={user.name} src={user.avatar} />
    </div>
);

export default Header;
