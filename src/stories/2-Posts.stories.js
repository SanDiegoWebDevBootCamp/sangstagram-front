import React from 'react';
import { action } from '@storybook/addon-actions';
import Post from '../posts/Post'
import PublishedDate from '../posts/PublishedDate'

export default {
  title: 'Post',
};

const post = {
    photoUrl: 'http://writingexercises.co.uk/images2/randomimage/slimy.jpg',
    caption: 'Cat is cute',
    publishedDate: new Date()
}
const publishedDate = new Date();

export const defaultRendering = () => <Post post={post} sang={'justing'} />;
export const publishedRender = () => <PublishedDate publishedDate={publishedDate} />
