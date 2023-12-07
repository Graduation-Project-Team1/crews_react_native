import React from "react"
import {View, Text } from "react-native";
import { currentBoxStyle } from "../../../styles/analysisScreen/teamStatsScreen/currentSeasonBox";

const CurrentSeasonBox = ({ data }) => {
  return( 
<View>
  <Text style={{marginLeft:15,marginTop:20,fontWeight:'bold'}}>2022-2023 시즌</Text>

  <View style={[currentBoxStyle.layout,{marginLeft:20,marginTop:10,}]}>
    <Text>순위   {data.ranking}위</Text>
    <Text style={{marginTop:5}}>결과   {data.appearance}경기 | {data.points}승점 | {data.winMatches}승 {data.drawMatches}무 {data.loseMatches}패</Text>
    <Text style={{marginTop:5}}>기록   {data.totalGoals}득점</Text>
    <Text style={{marginTop:5}}>최근   {data.recentMatches1}</Text>  
  </View>    
</View>
  );
};
export default CurrentSeasonBox;