import React from 'react';
import { action } from '@storybook/addon-actions';
import { range, sortBy } from 'lodash';
import * as faker from 'faker';
import Caption from '../Post/Caption';

export default {
    title: 'Caption',
};

const caption = 'Test';

export const defaultRendering = () => <Caption caption={caption} />;
