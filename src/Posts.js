import React from 'react';
import Box from '@material-ui/core/Box';
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


function Posts({ onNewComment }) {
    const { loading, error, data } = useQuery(POSTS);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :(</p>;

    return (
        <>
            { data.posts.map((post) => <Box p={1}><Post key={post.id} post={post} onNewComment={onNewComment}/></Box>)}
        </>
    );
}

export default Posts;
