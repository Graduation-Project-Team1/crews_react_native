import React,{useContext} from "react"
import {View, Text } from "react-native";
import { currentBoxStyle } from "../../../styles/analysisScreen/teamStatsScreen/currentSeasonBox";
import { ThemeContext } from "styled-components/native";
const CurrentSeasonBox = ({ data }) => {
  const theme = useContext(ThemeContext);
  return( 
<View>
  <Text style={{marginLeft:15,marginTop:20,fontWeight:'bold',color:theme.text}}>2022-2023 시즌</Text>

  <View style={[currentBoxStyle.layout,{marginLeft:20,marginTop:10,borderColor:'#E5E9EF'}]}>
    <Text style={{color:theme.text}}>순위   {data.ranking}위</Text>
    <Text style={{marginTop:5,color:theme.text}}>결과   {data.appearance}경기 | {data.points}승점 | {data.winMatches}승 {data.drawMatches}무 {data.loseMatches}패</Text>
    <Text style={{marginTop:5,color:theme.text}}>기록   {data.totalGoals}득점</Text>
    <Text style={{marginTop:5,color:theme.text}}>최근   {data.recentMatches1}</Text>  
  </View>    
</View>
  );
};
export default CurrentSeasonBox;