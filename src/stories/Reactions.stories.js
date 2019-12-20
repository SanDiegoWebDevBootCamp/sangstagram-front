import React from 'react';
import Reactions from '../Post/Reactions'

export default {
    title: 'Reactions',
};

const likes = 235;
const comments = [];

export const defaultRendering = () => <Reactions likes={likes} comments={comments} />;
