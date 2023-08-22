import React from 'react';
import { TouchableOpacity } from 'react-native';
import { Text, View } from 'react-native';
import Swiper from 'react-native-web-swiper';
import { AntDesign } from '@expo/vector-icons';
import { commonStyle, swiperStyle, } from '../../components/onboardingScreen/style';

import { TeamDataProvider, NicknameDataProvider } from '../../components/onboardingScreen/context';

import Profile from '../../components/onboardingScreen/ProfileScreen';
import MyMember from '../../components/onboardingScreen/MyMemberScreen';
import Check from '../../components/onboardingScreen/CheckScreen';
import MyTeam from '../../components/onboardingScreen/MyTeamScreen';

const OnboardingScreen = () => {

  return (
    <TeamDataProvider>
      <NicknameDataProvider>
        <View style = {{
          flex: 1,
          marginTop: 25
        }}>
          <Swiper 
            style={[commonStyle.alignment]} 
            showsButtons loop={false}
            controlsProps={{
              dotsTouchable: true,
              dotsPos: 'top',
              prevPos: 'top-left',
              nextPos: 'bottom',
              PrevComponent: ({ onPress }) => 
                <AntDesign 
                name="left" 
                size={24} 
                color="black"
                onPress={onPress}
                />,
              NextComponent: ({ onPress }) => <TouchableOpacity
                  onPress = {onPress}
                  style = {[swiperStyle.nextBtn]}>
                    <View style = {[commonStyle.alignment]}>
                    <Text style = {[swiperStyle.btnText]}>다음으로</Text>
                  </View>
                </TouchableOpacity>,
              lastNextElement: () => <TouchableOpacity
              style = {[swiperStyle.nextBtn]}>
                <View style = {[commonStyle.alignment]}>
                <Text style = {[swiperStyle.btnText]}>시작하기</Text>
              </View>
            </TouchableOpacity>,
            }}
            >
            <Profile/>
            <MyTeam/>
            <MyMember/>
            <Check/>
            
          </Swiper>
        </View>
      </NicknameDataProvider>
    </TeamDataProvider>
  )
}

export default OnboardingScreen;