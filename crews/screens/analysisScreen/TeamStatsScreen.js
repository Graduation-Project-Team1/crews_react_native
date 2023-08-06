import React from 'react';
import { View, Text, StyleSheet} from 'react-native';
import CurrentSeasonContent from '../../components/analysisScreen/teamStatsScreen/CurrentSeasonContent';
import CurrentSeasonBox from '../../components/analysisScreen/teamStatsScreen/CurrentSeasonBox';
import HistoricalRecordBox from '../../components/analysisScreen/teamStatsScreen/HistoricalRecordBox';
import HistoricalRecordContent from '../../components/analysisScreen/teamStatsScreen/HistoricalRecordContent';
import HighestRecordBox from '../../components/analysisScreen/teamStatsScreen/HighestRecordBox';
import HighestRecordContent from '../../components/analysisScreen/teamStatsScreen/HighestRecordContent';
import { teamScreenStyle } from '../../styles/analysisScreen/teamStatsScreen/teamScreen';

const TeamStatsScreen = () => {
  return (
    <View backgroundColor='#FFFFFF'>  
      <View style={teamScreenStyle.teamLine}/>  
      <View>
        <View style={teamScreenStyle.currentSeasonLayout}>
          <CurrentSeasonBox/>
          <CurrentSeasonContent/>
        </View>
        <HistoricalRecordBox/>
        <HistoricalRecordContent/>
        <View style={{ marginTop: 12 }}>
          <HighestRecordBox/>
          <HighestRecordContent/>
        </View>
      </View>
    </View>
  );
};

export default TeamStatsScreen;