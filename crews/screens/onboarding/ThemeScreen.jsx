import React from 'react';
import { TextInput} from 'react-native';
import { Text, View} from 'react-native';
import { Image } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import colors from '../../styles/colors';
import { LinearGradient } from 'expo-linear-gradient';
import { useMemo } from 'react';
import { RadioButton } from 'react-native-paper';

import { useNicknameData } from '../../components/onboardingScreen/context';
import {commonStyle, ThemeScreenStyle} from '../../styles/onboardingScreen/style'
import ProfileNextBtn from '../../components/onboardingScreen/ProfileNextBtn';
import ThemeSelectBtn from '../../components/onboardingScreen/ThemeSelectBtn';

const Theme = ({swiper}) => {

    const [checked, setChecked] = React.useState('team');

    const { enterNickname } = useNicknameData();
  
    const inputNickname = (nick) => {
      enterNickname(nick);
    }


    return(
      <View style = {{flex:1}}>
        <View style = {[ThemeScreenStyle.headerView]}>
            <Text style = {[commonStyle.boldText]}>사용할 테마를 선택해주세요.</Text>
            <Text style = {[commonStyle.text]}>선택 후에도 설정을 통해 변경할 수 있습니다.</Text>
        </View>
        <View style = {{
          flex:15,
          alignItems: 'center',
          paddingTop: 30,
          paddingHorizontal: 15
        }}>
          <ThemeSelectBtn text = '우리 팀 테마' value = 'team' color = '#276A52' checked = {checked} setChecked = {setChecked} />
          <ThemeSelectBtn text = '크루즈 테마' value = 'cruise' color = '#1B1DB7' checked = {checked} setChecked = {setChecked} />
          <ThemeSelectBtn text = '다크 테마' value = 'dark' color = '#181818' checked = {checked} setChecked = {setChecked} />
          <ThemeSelectBtn text = '시스템 설정 - 우리팀/다크' color = '#276A52' value = 'system_team' checked = {checked} setChecked = {setChecked} />
          <ThemeSelectBtn text = '시스템 설정 - 크루즈/다크' color = '#1B1DB7' value = 'system_cruise' checked = {checked} setChecked = {setChecked} />
        </View>
        <View style = {{
            alignItems: 'center',
            marginBottom: 10
        }}>
            <ProfileNextBtn 
                onPress = {() => swiper.current.scrollBy(1, true)}
                message = '테마를 선택해주세요'
            />
        </View>
      </View>
    )
}


export default Theme;