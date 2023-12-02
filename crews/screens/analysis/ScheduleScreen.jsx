import React from 'react';
import { StyleSheet, Text, View} from 'react-native';
import {Calendar} from "react-native-calendars";
import Icon from "react-native-vector-icons/Ionicons";
import TodayScheduleBox from '../../components/analysisScreen/TodayScheduleBox';
export default function ScheduleScreen() {
    return (
      <View style={{flex:1, backgroundColor:'#FFFFFF'}}>
        <View style={styles.line} />
        <Calendar style={styles.calendar}
            // 캘린더 내 스타일 수정
            theme={{
                calendarBackground:'#EFF4FF',
                todayTextColor: 'black',
                textDayFontSize: 20,
                textDayFontWeight: 'bold',
                textMonthFontSize: 20,
                textMonthFontWeight: 'bold',
                textSectionTitleColor: 'rgba(138, 138, 138, 1)',
            }}
            // 날짜 클릭 시 그 날짜 출력
            onDayPress={(day) => {console.log(day)}}
            // 이전 달, 다음 달 날짜 숨기기
            hideExtraDays={true}
            // 달 포맷 지정
            monthFormat={'yyyy.MM'}
            // 달이 바뀔 때 바뀐 달 출력
            onMonthChange={(month) => {console.log(month)}}
            // 달 이동 화살표 구현 왼쪽이면 왼쪽 화살표 이미지, 아니면 오른쪽 화살표 이미지
            renderArrow={(direction) => direction === "left" ? 
            <Icon name="chevron-back-outline" size={20}/> : <Icon name="chevron-forward-outline" size={20}/>}
        />
        <Text style={[styles.bold,{fontSize:15,marginLeft:15,marginTop:20}]}>10월 16일 일정</Text>
        <TodayScheduleBox/>
      </View>
    );
};

  //yarn add react-native-calendars
const styles = StyleSheet.create({
    bold:{
      fontWeight:'bold'
    },
    calendar: {
        marginLeft:10,
        marginRight:10,
        marginTop:20,
        paddingBottom: 30,
        borderWidth: 1,
        borderColor: '#E9E9E9',
        backgroundColor:'#EFF4FF',
        borderRadius: 20
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
      marginTop: 40,
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
  