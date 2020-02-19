import React from 'react';
import NewPost from '../Post/New/Form';

export default {
    title: 'NewPost',
};

const onSubmit = console.log;

export const defaultRendering = () => <NewPost onSubmit={onSubmit} />;
