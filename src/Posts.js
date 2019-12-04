import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';
import Post from './Post';

const POSTS = gql`
    {
        posts {
            id,
            user {
              username
              avatar
            }
            photoUrl,
            caption,
            likes,
            datePublished,
            comments {
                id,
                date,
              comment,
              user {
                username
                avatar
              }
            }
          }
    }
`;


function Posts() {
    const { loading, error, data } = useQuery(POSTS);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :(</p>;

    return (
        <>
            { data.posts.map((post) => <Post key={post.id} post={post} />)}
        </>
    );
}

export default Posts;
