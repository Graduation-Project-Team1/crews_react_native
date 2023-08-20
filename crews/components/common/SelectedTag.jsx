import React from "react";
import { View, Text } from "react-native";
import { selectedTagStyles } from "../../styles/styles";

const SelectedTag = ({text}) => {
  return (
    <View style={selectedTagStyles.layout}>
      <Text style={selectedTagStyles.text}>{text}</Text>
    </View>
  );
};

export default SelectedTag;
