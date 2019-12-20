import React from 'react';
import * as faker from 'faker';
import PublishedDate from '../Post/Header/PublishedDate';
import Header from '../Post/Header';

export default {
    title: 'Header',
};


const publishedDate = new Date();
const user = {
    ...faker.helpers.userCard(),
    avatar: faker.image.avatar(),
};


export const publishedRender = () => <PublishedDate publishedDate={publishedDate} />;
export const headerRender = () => <Header publishedDate={publishedDate} user={user} />;
