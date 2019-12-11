import React from 'react';
import { range, sortBy } from 'lodash';
import List from '@material-ui/core/List';
import * as faker from 'faker';
import FollowingLine from './FollowingLine';

const buildUsers = (numberOfUsers) => range(0, numberOfUsers).map(() => (
    {
        ...faker.helpers.userCard(),
        avatar: faker.image.avatar(),
    }
));

const users = buildUsers(5);

const renderFollowingLine = (user) => (
    <FollowingLine user={user} />
);

const Following = () => (
    <List>
        {users.map((user) => renderFollowingLine(user))}
    </List>
);

export default Following;
