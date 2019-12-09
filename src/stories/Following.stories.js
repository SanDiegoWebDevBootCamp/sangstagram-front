import React from 'react';
import * as faker from 'faker';
import UserAvatar from '../Following/UserAvatar';
import FollowingLine from '../Following/FollowingLine'

export default {
    title: 'Following',
};

const user = {
    username: 'gunwoo1999',
    avatar: faker.image.avatar(),
    name: 'Gunwoo Park',
};


export const userAvatarRender = () => <UserAvatar user={user} />;
export const followingLineRender = () => <FollowingLine user={user} />;