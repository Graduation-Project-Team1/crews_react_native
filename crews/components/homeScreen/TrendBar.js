import React from "react";
import { View } from "react-native";
import { trendBarStyle } from "../../styles/homeScreen/trendBar";
import HashTag from "./HashTag";

const TrendBar = (props) => {
  return (
    <View style={trendBarStyle.layout}>
      <View style={trendBarStyle.background}>
        <View style={[trendBarStyle.front, {backgroundColor: props.color, width: props.percent}]}/>
      </View>
      <View style={trendBarStyle.keywords}>
        <HashTag keyword="키워드1"/>
        <HashTag keyword="키워드2"/>
        <HashTag keyword="키워드3"/>
      </View>
    </View>
  );
};

export default TrendBar;
