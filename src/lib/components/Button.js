import React from "react";
import { Button } from "@material-ui/core";

const CustomizedButton = (props) => {
  const { variant, color, size, onClick, btnText } = props;
  return (
    <Button
      variant={variant || "outlined"}
      color={color || "secondary"}
      size={size || "medium"}
      onClick={onClick}
    >
      {/* {btnText} */}
   
   hard coded text </Button>
  );
};

export default CustomizedButton;
