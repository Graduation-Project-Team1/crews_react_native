import React, { useContext, useEffect } from "react";
import { View, Text } from "react-native";

import CategoryBtn from "../../components/settingScreen/CategoryBtn";
import CateHeader from "../../components/settingScreen/CateHeader";
import ProfileView from "../../components/settingScreen/ProfileView";
import ThemeSelectBtn from '../../components/onboardingScreen/ThemeSelectBtn';
import { storeTheme } from "../../api/asyncStorage";
import { useRecoilState } from "recoil";
import { themeState } from "../../recoil/themeState";
import { ThemeContext } from "styled-components";
import { userTeamState } from "../../recoil/teamState";


const AppSettingScreen = ({navigation}) => {
  const theme = useContext(ThemeContext);
  const [currentState, setCurrentState] = useRecoilState(userTeamState);
  const [checked, setChecked] = useRecoilState(themeState);
  const [language, setLanguage] = React.useState('korean');

  useEffect(() => {
    console.log(checked);
    storeTheme(checked)
      .then(() => console.log('success'));
  }, [checked])


  return (
    
    <View style = {{
      flex: 1,
      backgroundColor: theme.background,
    }}>
      <CateHeader title = '앱 설정' onPress = {() => navigation.pop()}/>
      <View style = {{
                padding: 15,
                paddingBottom: 30,
                width: '100%',
            }}>
                <Text style = {{fontSize: 17, fontWeight: 'bold', marginBottom: 20, color: theme.text}}>테마</Text>
                <View style = {{
                  justifyContent: 'center',
                  alignItems: 'center',
                  width: '100%',
                }}>
                  <ThemeSelectBtn text = '우리 팀 테마' value = 'team' color = {currentState.id === 6908 ? '#046A38' : '#B6181A'} checked = {checked} setChecked = {setChecked} />
                  <ThemeSelectBtn text = '라이트 테마' value = 'light' color = '#1B1DB7' checked = {checked} setChecked = {setChecked} />
                  <ThemeSelectBtn text = '다크 테마' value = 'dark' color = '#181818' checked = {checked} setChecked = {setChecked} />
                </View>
                
            </View>
            <View style = {{
                padding: 15,
                paddingTop: 30,
                paddingBottom: 30
            }}>
                <Text style = {{fontSize: 17, fontWeight: 'bold', marginBottom: 20, color: theme.text}}>언어</Text>
                <ThemeSelectBtn text = '한국어' value = 'korean' checked = {language} setChecked = {setLanguage} />
                <ThemeSelectBtn text = '영어' value = 'english' checked = {language} setChecked = {setLanguage} />
            </View>
    </View>
  );
}

export default AppSettingScreen;
