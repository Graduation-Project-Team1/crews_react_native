import {View, Text } from "react-native";
import { currentBoxStyle } from "../../../styles/analysisScreen/teamStatsScreen/currentSeasonBox";

const CurrentSeasonBox = () => {
    return( 
  <View>
    <Text style={{marginLeft:15,marginTop:20,fontWeight:'bold'}}>2022-2023 시즌</Text>

    <View style={[currentBoxStyle.layout,{marginLeft:20,marginTop:10,}]}>
      <Text>순위   7위</Text>
      <Text style={{marginTop:5}}>결과   15경기 | 18승점 | 5승 3무 7패</Text>
      <Text style={{marginTop:5}}>기록   17득점</Text>
      <Text style={{marginTop:5}}>최근   패 | 승 | 무 | 승 | 무</Text>  
    </View>    
  </View>
    );
};

export default CurrentSeasonBox;