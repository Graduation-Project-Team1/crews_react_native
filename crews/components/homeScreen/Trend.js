import React from "react";
import { Text, View } from "react-native";
import { trendStyle } from "../../styles/homeScreen/trend";
import TrendBar from "./TrendBar";

const Trend = () => {
  return (
    <View>
      <View style={[trendStyle.layout]}>
        <Text style={trendStyle.title}>긍정</Text>
        <TrendBar color={"#224F85"} percent={"70%"}/>
      </View>
      <View style={[trendStyle.layout]}>
        <Text style={trendStyle.title}>부정</Text>
        <TrendBar color={"#F9D802"} percent={"30%"}/>
      </View>
    </View>
  );
};

export default Trend;
