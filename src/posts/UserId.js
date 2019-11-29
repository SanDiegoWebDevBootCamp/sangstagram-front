import React from 'react';

class UserId extends React.Component{
    render(){
        return(
            <button onClick={() => console.log(this.props.userId)}>
                {this.props.userId}
            </button>
        )
    }
}



export default UserId
