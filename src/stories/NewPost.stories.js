import React from 'react';
import NewPost from '../Post/New';
import Form from '../Post/New/Form';

export default {
    title: 'NewPost',
  };

export const defaultRendering = () => <NewPost />;
export const renderForm = () => <Form />;