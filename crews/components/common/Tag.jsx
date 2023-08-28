import React from "react";
import { TouchableOpacity, View } from "react-native";
import SelectedTag from "./SelectedTag";
import UnselectedTag from "./UnselectedTag";

const Tag = ({isSelected, text, onPress}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      {
        isSelected ? <SelectedTag text={text}/> : <UnselectedTag text={text}/>
      }
    </TouchableOpacity>
  );
};

export default Tag;
