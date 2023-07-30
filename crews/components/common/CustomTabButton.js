import React from "react";
import { TouchableOpacity } from "react-native";
import colors from "../../styles/colors";

const CustomTabButton = (props) => {
  return (
    <TouchableOpacity
      {...props}
      style={
        props.accessibilityState.selected
          ? [props.style, {borderTopColor: colors.Green, borderTopWidth: 2}]
          : props.style
      }
    />
  );
};

export default CustomTabButton;
