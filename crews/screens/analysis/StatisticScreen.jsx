import React, {useState} from 'react';
import { StyleSheet, Text, View, TouchableOpacity,ScrollView } from 'react-native';
import TeamStatsScreen from './TeamStatsScreen';
import CoachInfoScreen from './CoachInfoScreen';
import PlayerScreen from './PlayerScreen';

export default function StatisticScreen() {
  const [showTeamStats, setShowTeamStats] = useState(true);
  const [showCoachInfo, setShowCoachInfo] = useState(false);
  const [showPlayer, setShowPlayer] = useState(false);
  return (
    <View style={{flex:1, backgroundColor:'#FFFFFF'}}>
      <View style={{ flexDirection: 'row', marginTop: 10 }}>
          <View style={{ flex: 1, height: 2, backgroundColor: '#CAC4D0' }} />
          <View style={{ flex: 1, height: 2, backgroundColor: '#1B1DB7' }} />
      </View>
      <View style={styles.textContainer}>
        <TouchableOpacity onPress={() => { setShowTeamStats(true), setShowCoachInfo(false), setShowPlayer(false); } }>
            <Text style={styles.textInput}>팀</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => { setShowTeamStats(false), setShowCoachInfo(true), setShowPlayer(false); } }>
            <Text style={[styles.textInput,{marginLeft:7}]}>코치</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => { setShowTeamStats(false), setShowCoachInfo(false), setShowPlayer(true); } }>
            <Text style={[styles.textInput,{marginLeft:7}]}>선수</Text>
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
    color:'#1B1DB7',
    borderWidth:0.8,
    borderColor: '#1B1DB7',
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
