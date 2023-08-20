import React from "react";
import { View, Text } from "react-native";
import { unSelectedTagStyles } from "../../styles/styles";

const UnselectedTag = ({text}) => {
  return (
    <View style={unSelectedTagStyles.layout}>
      <Text style={unSelectedTagStyles.text}>{text}</Text>
    </View>
  );
};

export default UnselectedTag;
