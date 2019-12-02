import React from 'react';
import { action } from '@storybook/addon-actions';
import Post from '../posts/Post'
import PublishedDate from '../posts/PublishedDate'
import UserId from '../posts/UserId'
import Header from '../posts/Header'

export default {
  title: 'Header',
};


const publishedDate = new Date(); 

const userId = 'byum1996'


export const publishedRender = () => <PublishedDate publishedDate={publishedDate} />
export const userIdRender = () => <UserId userId={userId} />
export const headerRender = () => <Header publishedDate={publishedDate} userId={userId}/> 
