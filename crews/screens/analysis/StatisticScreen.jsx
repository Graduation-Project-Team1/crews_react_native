import React, {useState,useContext} from 'react';
import { StyleSheet, Text, View, TouchableOpacity,ScrollView } from 'react-native';
import TeamStatsScreen from './TeamStatsScreen';
import CoachInfoScreen from './CoachInfoScreen';
import PlayerScreen from './PlayerScreen';
import { ThemeContext } from "styled-components/native";
export default function StatisticScreen() {
  const [showTeamStats, setShowTeamStats] = useState(true);
  const [showCoachInfo, setShowCoachInfo] = useState(false);
  const [showPlayer, setShowPlayer] = useState(false);
  const theme = useContext(ThemeContext);
  return (
    <View style={{flex:1, backgroundColor: theme.background}}>
      <View style={{ flexDirection: 'row', marginTop: 10 }}>
          <View style={{ flex: 1, height: 2, backgroundColor: theme.primaryLightMore}} />
          <View style={{ flex: 1, height: 2, backgroundColor: theme.pointBackground}} />
      </View>
      <View style={[styles.textContainer,{backgroundColor:theme.background}]}>
        <TouchableOpacity onPress={() => { setShowTeamStats(true), setShowCoachInfo(false), setShowPlayer(false); } }>
            <Text style={[styles.textInput,{color:theme.text,borderColor:theme.primary}]}>팀</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => { setShowTeamStats(false), setShowCoachInfo(true), setShowPlayer(false); } }>
            <Text style={[styles.textInput,{marginLeft:7,color:theme.text,borderColor:theme.primary}]}>코치</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => { setShowTeamStats(false), setShowCoachInfo(false), setShowPlayer(true); } }>
            <Text style={[styles.textInput,{marginLeft:7,color:theme.text,borderColor:theme.primary}]}>선수</Text>
        </TouchableOpacity>
      </View>

      {/* 팀 통계*/}
      {showTeamStats && (
        <TeamStatsScreen/>
      )}
      {/* 코치 정보 화면 */}
      {showCoachInfo && (
      <ScrollView style={{showsVerticalScrollIndicator:false}}>
        <CoachInfoScreen/>
      </ScrollView>
      )}
      {/* 선수 화면 */}
      {showPlayer && (
        /*<ScrollView style={{showsVerticalScrollIndicator:false}}> */
          <PlayerScreen/>
        
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  bold:{
    fontWeight:'bold'
  },
  imageContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 50
  },
  imageInput: {
    resizeMode: "contain",
    width: 180,
    height: 180
  },
  textContainer: {
    flexDirection: 'row',
    marginLeft:15,
    marginTop: 20,
  },
  textInput: {
    borderWidth:1,
    borderRadius:10,
    paddingLeft:12,
    paddingRight:12,
  },
  line: {
    height: 1,
    backgroundColor: '#CAC4D0', // 라인의 색상
    marginTop: 10, // 상하 여백
  },
  coachLine: {
    height: 1,
    backgroundColor:'#276A52',
    height:2,
    marginLeft:145,
    width:120
  },
  playerLine: {
    height: 1,
    backgroundColor:'#276A52',
    height:2,
    marginright:20,
    width:120
  }

});
