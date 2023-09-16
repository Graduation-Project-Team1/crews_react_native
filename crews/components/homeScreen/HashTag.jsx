import React from "react";
import { Text, View } from "react-native";

const HashTag = (props) => {
  return (
    <Text>{"#"}{props.keyword}</Text>
  );
};

export default HashTag;
