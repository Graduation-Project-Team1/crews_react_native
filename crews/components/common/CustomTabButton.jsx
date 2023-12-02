import React from "react";
import { TouchableOpacity } from "react-native";

const CustomTabButton = (props) => {
  return (
    <TouchableOpacity
      {...props}
      style={ props.style }
    />
  );
};

export default CustomTabButton;
