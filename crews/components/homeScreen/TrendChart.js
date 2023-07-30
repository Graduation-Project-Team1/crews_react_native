import React from "react";
import { View, Text } from "react-native";
import { trendChartStyle } from "../../styles/homeScreen/trendChart";
import ChartList from "./ChartList";

const TrendChart = () => {
  return (
    <View style={trendChartStyle.layout}>
      <View style={trendChartStyle.list}>
        <Text style={trendChartStyle.listTitle}>우리 팀 트렌드</Text>
        <ChartList/>
      </View>
      <View style={trendChartStyle.divider}/>
      <View style={trendChartStyle.list}>
        <Text style={trendChartStyle.listTitle}>우리 리그 트렌드</Text>
        <ChartList/>
      </View>
    </View>
  );
};

export default TrendChart;
