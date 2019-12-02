import React from 'react';
import { action } from '@storybook/addon-actions';
import PublishedDate from '../Post/Header/PublishedDate'
import UserId from '../Post/Header/UserId'
import Header from '../Post/Header'

export default {
  title: 'Header',
};


const publishedDate = new Date(); 

const userId = 'byum1996'


export const publishedRender = () => <PublishedDate publishedDate={publishedDate} />
export const userIdRender = () => <UserId userId={userId} />
export const headerRender = () => <Header publishedDate={publishedDate} userId={userId}/> 
