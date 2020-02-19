import React from 'react';
import { useMutation } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';
import { useCookies } from 'react-cookie';
import Form from './Form';

const ADD_NEW_POST = gql`
  mutation addNewPost($caption: String!, $photo: Upload!) {
    addNewPost(caption: $caption, photo: $photo) {
      caption,
      photoUrl,
    }
  }
`;

const NewPost = () => {
    const [cookies] = useCookies(['jwt']);
    const options = {
        context: {
            jwt: cookies.jwt,
        },
    };
    const [addNewPost, { data }] = useMutation(ADD_NEW_POST, options);
    const onSubmit = ({ caption, photo }) => {
        addNewPost({ variables: { caption, photo } });
    };

    return (
        <Form onSubmit={onSubmit} />
    );
};

export default NewPost;
