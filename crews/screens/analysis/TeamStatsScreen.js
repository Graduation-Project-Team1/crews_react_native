import React from 'react';
import { View, Text, StyleSheet, ScrollView} from 'react-native';
import CurrentSeasonBox from '../../components/analysisScreen/teamStatsScreen/CurrentSeasonBox';
import HistoricalRecordBox from '../../components/analysisScreen/teamStatsScreen/HistoricalRecordBox';
import HighestRecordBox from '../../components/analysisScreen/teamStatsScreen/HighestRecordBox';
import { teamScreenStyle } from '../../styles/analysisScreen/teamStatsScreen/teamScreen';

const TeamStatsScreen = () => {
  return (
    <ScrollView style={{showsVerticalScrollIndicator:false,backgroundColor:'#FFFFFF'}}>    
        <CurrentSeasonBox/>
        <View style={{height: 1,backgroundColor: '#CAC4D0', marginTop: 40}}/>
        <HistoricalRecordBox/>     
        <View style={{height: 1,backgroundColor: '#CAC4D0', marginTop: 40}}/>
        <HighestRecordBox/>
    </ScrollView>
  );
};

export default TeamStatsScreen;