import React from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import './new.css'

class Form extends React.Component{
    render() {
        return (
            <div className ='form'>
                <TextField id="standard-basic" label="Post Url" />
                <TextField id="standard-basic" label="Caption" />
                <Button variant="contained">Submit</Button>
            </div>

        )    
    }
}

export default Form
