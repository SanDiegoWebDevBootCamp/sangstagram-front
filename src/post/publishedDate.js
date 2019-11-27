import React from 'react'; 

class PublishedDate extends React.Component{
    render(){
        return(
            <p>{this.props.publishedDate.toString()}</p>
        )
    }
}

export default PublishedDate
