import React from 'react';
import UserAvatar from './UserAvatar';
import FollowingButton from './FollowingButton';
import './followingline.css';

const FollowingLine = ({ user }) => (
    <div className="followingline">
        <UserAvatar user={user} />
        <FollowingButton />
    </div>
);

export default FollowingLine;
