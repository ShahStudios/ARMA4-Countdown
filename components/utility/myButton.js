import React from 'react';
import Button from '@material-ui/core/Button';

const MyButton = (props) => {
    return (
        <Button 
            href={props.link}
            variant="contained"
            size="small"
            style={{
                background: props.bg,
                color: props.color
            }} >
                {props.text}
            </Button>
    )
}

export default MyButton;