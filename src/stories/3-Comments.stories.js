import React from 'react';
import { action } from '@storybook/addon-actions';
import { range } from 'lodash'
import * as faker from 'faker'
import Comments from '../Comments'

export default {
  title: 'Comments',
};

const buildComments = (numberOfComments) => {
  return range(0, numberOfComments).map(() => (
    {
      user: {
        ...faker.helpers.userCard(),
        avatar: faker.image.avatar()
      },
      comment: faker.lorem.paragraph(),
      date: faker.date.recent()
    }
  ));
};

const comments = buildComments(5)

export const defaultRendering = () => <Comments comments={comments} />;
export const noCommentsRendering = () => <Comments comments={[]} />;
