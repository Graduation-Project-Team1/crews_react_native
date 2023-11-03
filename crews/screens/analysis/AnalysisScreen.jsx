import React, {useState} from 'react';
import { Button, StyleSheet, Text, TextInput, View, Image, TouchableOpacity,ScrollView } from 'react-native';
import ScheduleScreen from './ScheduleScreen';
import StatisticScreen from './StatisticScreen';
import PlayerList from '../../components/analysisScreen/playerScreen/PlayerList';

export default function AnalysisScreen() {
  const [showStats, setShowStats] = useState(false);
  const [showSchedule, setShowSchedule] = useState(true);
  return (
    <View style={{flex:1, backgroundColor:'#FFFFFF'}}>
      <Text style={[styles.bold,{marginLeft:10, marginTop: 70}]}>팀 정보</Text>
      <View style={styles.textContainer}>
        <TouchableOpacity onPress={() => { setShowSchedule(true), setShowStats(false); } }>
            <Text style={[styles.bold]}>일정</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => { setShowSchedule(false), setShowStats(true); } }>
            <Text style={[styles.bold]}>통계</Text>
        </TouchableOpacity>
      </View>

      {/* 팀 통계*/}
      {showSchedule && (
        <ScheduleScreen/>
      )}
      {/* 선수 화면 */}
      {showStats && (
        /*<ScrollView style={{showsVerticalScrollIndicator:false}}> */
        <StatisticScreen/>
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
    justifyContent:'space-around',
    marginTop: 30,
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
