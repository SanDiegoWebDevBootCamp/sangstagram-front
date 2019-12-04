import React from 'react'
import Button from '@material-ui/core/Button';
import Form from './Form';

class NewPost extends React.Component{
    constructor(props) {
        super(props);
        this.buttonClicked = this.buttonClicked.bind(this);
        this.state = {shouldDisplayForm: false};
    }

    // event handler, onClick event handler
    buttonClicked() {
        this.setState({shouldDisplayForm: true});
    }

    render(){
        if (this.state.shouldDisplayForm) {
            return (
                <Form />
            )
        } else {
            return(
                <Button onClick={this.buttonClicked} variant="contained" color="primary">
                    New Post
                </Button>
            )
        }
    }
}

export default NewPost
