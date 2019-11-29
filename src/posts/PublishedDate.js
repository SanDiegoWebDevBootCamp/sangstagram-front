import React from 'react'; 

class PublishedDate extends React.Component{
    render(){
        return(
            <div className="left-align-board">
                <p>{this.props.publishedDate.toString()}</p>
            </div>
            
        )
    }
}

export default PublishedDate
