import React from 'react';
import {Button} from "@material-ui/core"

const Button = (props) => {
    const {variant,color,size,onClick,btnText}=props
    return ( 
        <Button variant={variant|| "outlined"} color={color|| "secondary"} size={size||"medium"} onClick={onClick}>
{btnText}
        </Button>
     );
}
 
export default Button;
