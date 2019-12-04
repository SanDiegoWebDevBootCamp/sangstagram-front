import React from 'react';
import Caption from '../Post/Caption';

export default {
    title: 'Caption',
};

const caption = 'Test';

export const defaultRendering = () => <Caption caption={caption} />;
