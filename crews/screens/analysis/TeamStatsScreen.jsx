import React, { useState, useEffect,useContext } from 'react';
import axios from 'axios';
import { View, Text, StyleSheet, ScrollView} from 'react-native';
import CurrentSeasonBox from '../../components/analysisScreen/teamStatsScreen/CurrentSeasonBox';
import HistoricalRecordBox from '../../components/analysisScreen/teamStatsScreen/HistoricalRecordBox';
import HighestRecordBox from '../../components/analysisScreen/teamStatsScreen/HighestRecordBox';
import { teamScreenStyle } from '../../styles/analysisScreen/teamStatsScreen/teamScreen';
import { ThemeContext } from "styled-components/native";
const TeamStatsScreen = () => {
  const [data, setData] = useState([]);  // 수정된 코드
  const theme = useContext(ThemeContext);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const teamResponse = await axios.get("https://crews.jongmin.xyz/data/record/team/6908");
        setData(teamResponse.data[0]);  // 수정된 코드
        
      } catch (error) {
        console.error('데이터를 가져오는 중 오류 발생:', error);
      }
    };

    fetchData();
  }, []);
  return (
    <ScrollView style={{showsVerticalScrollIndicator:false,backgroundColor:theme.background}}>    
        <CurrentSeasonBox data={data}/>
        <View style={{height: 1,backgroundColor: '#E5E9EF', marginTop: 40}}/>
        <HistoricalRecordBox data={data}/>     
        <View style={{height: 1,backgroundColor: '#E5E9EF', marginTop: 40}}/>
        <HighestRecordBox data={data}/>
    </ScrollView>
  );
};

export default TeamStatsScreen;