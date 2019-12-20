import React from 'react';
import { action } from '@storybook/addon-actions';
import NewComment from '../Post/Comments/NewComment';

export default {
    title: 'NewComment',
};

export const newCommentRender = () => <NewComment onSubmit={action('submitted')} />;
