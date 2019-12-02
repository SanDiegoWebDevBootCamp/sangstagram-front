import React from 'react';
import Reactions from '../posts/Reactions'

export default {
    title: 'Reactions',
  };

const sangs = 'sangs 100'
const comments = 'comments 100'
export const defaultRendering = () => <Reactions sangs={sangs} comments={comments} />;