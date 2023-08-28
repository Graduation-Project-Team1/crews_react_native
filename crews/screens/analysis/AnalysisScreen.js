import React, {useState} from 'react';
import { Button, StyleSheet, Text, TextInput, View, Image, TouchableOpacity,ScrollView } from 'react-native';
import TeamStatsScreen from './TeamStatsScreen';
import CoachInfoScreen from './CoachInfoScreen';
import PlayerScreen from './PlayerScreen';

export default function AnalysisScreen() {
  const [showTeamStats, setShowTeamStats] = useState(true);
  const [showCoachInfo, setShowCoachInfo] = useState(false);
  const [showPlayer, setShowPlayer] = useState(false);
  return (
    <View style={{flex:1, backgroundColor:'#FFFFFF'}}>
      <View style={styles.imageContainer}>
        <Image style={styles.imageInput} source={require('../../assets/analysis/jeounBuk.png')} />
      </View>
      <View style={styles.textContainer}>
        <TouchableOpacity onPress={() => { setShowTeamStats(true), setShowCoachInfo(false), setShowPlayer(false); } }>
            <Text style={styles.textInput}>팀 통계</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => { setShowTeamStats(false), setShowCoachInfo(true), setShowPlayer(false); } }>
            <Text>코치 정보</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => { setShowTeamStats(false), setShowCoachInfo(false), setShowPlayer(true); } }>
            <Text>선수</Text>
        </TouchableOpacity>
      </View>
      
      <View style={styles.line} />

      {/* 팀 통계*/}
      {showTeamStats && (
        <TeamStatsScreen />
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
    justifyContent: 'space-around',
    marginTop: 5,
  },
  textInput: {
    flex: 1,
    textAlign: 'center',
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
