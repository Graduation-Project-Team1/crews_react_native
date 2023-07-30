import React from "react";
import { Text, View } from "react-native";
import colors from "../../styles/colors";
import { contentsStyle } from "../../styles/homeScreen/contents";
import { styles } from "../../styles/styles";
import NewsList from "./NewsList";
import Trend from "./Trend";
import TrendChart from "./TrendChart";

const Contents = () => {
  return (
    <View style={[contentsStyle.layout]}>
      <View style={[styles.container, {paddingTop: 0}]}>
        <Text style={contentsStyle.title}>주요 뉴스</Text>
        <NewsList/>
        <Text style={contentsStyle.title}>여론 분석</Text>
        <Trend/>
        <TrendChart/>
      </View>
    </View>
  );
};

export default Contents;
