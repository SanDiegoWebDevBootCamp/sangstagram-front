import React from 'react';
import { action } from '@storybook/addon-actions';
import { range, sortBy } from 'lodash';
import * as faker from 'faker';
import Post from '../Post';

export default {
    title: 'Post',
};
const buildComments = (numberOfComments) => range(0, numberOfComments).map(() => (
    {
        user: {
            ...faker.helpers.userCard(),
            avatar: faker.image.avatar(),
        },
        comment: faker.lorem.paragraph(),
        date: faker.date.past(),
    }
));

const comments = sortBy(buildComments(5), (comment) => comment.date);

const post = {
    user: {
        username: 'byum1996',
    },
    photoUrl: faker.image.nature(),
    caption: 'Caption sample',
    publishedDate: new Date(),
    likes: 100,
    comments,
};
const publishedDate = new Date();

export const defaultRendering = () => <Post post={post} />;
