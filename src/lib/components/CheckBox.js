import { Checkbox } from '@material-ui/core';
import React from 'react';

const CustomisedCheckBox = (props) => {
    const {checked,onChange,color}=props
    return (  
        <Checkbox
        checked={checked||false}
        onChange={onChange}
        name="checked"
        color={color||"secondary"}
      />
    );
}
 
export default CustomisedCheckBox;