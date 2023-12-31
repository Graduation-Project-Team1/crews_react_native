import React from 'react';
import { useState, useEffect, useContext } from 'react';
import { ScrollView, Text, View } from 'react-native';
import MorningBanner from '../../components/PodCastScreen/MorningBanner.js';
import EveningBanner from '../../components/PodCastScreen/EveningBanner.js';
import AlignButton from '../../components/PodCastScreen/AlignButton.js';
import PlayList from '../../components/PodCastScreen/PlayList.js';
import Player from '../../components/PodCastScreen/Player.js';
import PodcastList from '../../components/PodCastScreen/PodcastItems.js';
import colors from '../../styles/colors.jsx';


import { usePodcastData } from '../../components/PodCastScreen/PodcastContext.jsx';
import { ThemeContext } from 'styled-components';

const PodCastScreen = ({navigation}) => {
  const theme = useContext(ThemeContext);
  const {podcastData} = usePodcastData();
  const {onClickPodcast} = usePodcastData();
  


  return (
    <View style = {{
      flex: 1,
      backgroundColor: theme.background
      
    }}>
          <ScrollView style = {{
          padding: 15,
          paddingTop: 50,
          flex: 1
          }}>
            <Text style = {{fontWeight: 'bold', color: theme.text, fontSize: 18, marginBottom: 30}}>오늘의 라디오</Text>
            
            <View style = {{
              flexDirection: 'column',
              borderBottomColor: colors.dividerGray,
              borderBottomWidth: 1,
              paddingBottom: 20
            }}>
              <MorningBanner title = '하루를 시작하는 전북현대' list = {['성공', '득점', '나이티']}/>
              <MorningBanner title = '퇴근길에 함께하는 전북현대' list = {['연휴', '휴가', '나이티']}/>
            </View>
            
            <View style = {{
              flexDirection: 'row-reverse',
              marginTop:30,
              alignItems: 'center',
              height: 30,
              marginBottom: 30
            }}>
              <AlignButton name = "최신순"/>
              <AlignButton name = "2023년 12월"/>
              <Text style = {{fontSize: 18, color: theme.text, fontWeight: 'bold', position: 'absolute', right: 0}}>지난 라디오</Text>
            </View>
          
            <PodcastList/>          
            
          </ScrollView>
  
    </View>

    
    
  );
}

export default PodCastScreen;
