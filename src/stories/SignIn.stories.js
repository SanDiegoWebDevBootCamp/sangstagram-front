import React from 'react';
import { action } from '@storybook/addon-actions';
import SignIn from '../Profile/SignIn';

export default {
    title: 'SignIn',
};

export const signInRender = () => <SignIn onSubmit={action('submitted')} />;
