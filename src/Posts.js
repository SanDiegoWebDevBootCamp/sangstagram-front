import React from 'react';
import Box from '@material-ui/core/Box';
import { useQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';
import { useCookies } from 'react-cookie';
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
    const [cookies] = useCookies(['jwt']);
    const options = {
        context: {
            jwt: cookies.jwt,
        },
    };
    const { loading, error, data } = useQuery(POSTS, options);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :(</p>;

    return (
        <>
            {
                data.posts.map((post) => (
                    <Box key={post.id} p={1}>
                        <Post post={post} onNewComment={onNewComment} />
                    </Box>
                ))

            }
        </>
    );
}

export default Posts;
