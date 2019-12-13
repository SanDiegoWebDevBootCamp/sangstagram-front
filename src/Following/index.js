import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';
import List from '@material-ui/core/List';
import Box from '@material-ui/core/Box';
import FollowingLine from './FollowingLine';

const FOLLOWING = gql`
{
    following {
      id
      username
      avatar
    }
}
`;

const renderFollowingLine = (user) => (
    <Box p={1}>
        <FollowingLine user={user} />
    </Box>
);

const Following = () => {
    const { loading, error, data } = useQuery(FOLLOWING);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :(</p>;

    return (
        <List>
            {data.following.map((user) => renderFollowingLine(user))}
        </List>
    );
};

export default Following;
