import React from "react";
import { View, Text } from "react-native";

import CategoryBtn from "../../components/settingScreen/CategoryBtn";
import CateHeader from "../../components/settingScreen/CateHeader";
import ProfileView from "../../components/settingScreen/ProfileView";
import ThemeSelectBtn from '../../components/onboardingScreen/ThemeSelectBtn';


const AppSettingScreen = ({navigation}) => {

  const [checked, setChecked] = React.useState('team');
  const [language, setLanguage] = React.useState('korean');


  return (
    
    <View style = {{
      flex: 1,
      backgroundColor: '#ffffff'
    }}>
      <CateHeader title = '앱 설정' onPress = {() => navigation.pop()}/>
      <View style = {{
                padding: 15,
                paddingBottom: 30,
                width: '100%',
            }}>
                <Text style = {{fontSize: 17, fontWeight: 'bold', marginBottom: 20}}>테마</Text>
                <View style = {{
                  justifyContent: 'center',
                  alignItems: 'center',
                  width: '100%',
                }}>
                  <ThemeSelectBtn text = '우리 팀 테마' value = 'team' color = '#276A52' checked = {checked} setChecked = {setChecked} />
                  <ThemeSelectBtn text = '크루즈 테마' value = 'cruise' color = '#1B1DB7' checked = {checked} setChecked = {setChecked} />
                  <ThemeSelectBtn text = '다크 테마' value = 'dark' color = '#181818' checked = {checked} setChecked = {setChecked} />
                  <ThemeSelectBtn text = '시스템 설정 - 우리팀/다크' color = '#276A52' value = 'system_team' checked = {checked} setChecked = {setChecked} />
                  <ThemeSelectBtn text = '시스템 설정 - 크루즈/다크' color = '#1B1DB7' value = 'system_cruise' checked = {checked} setChecked = {setChecked} />
                </View>
                
            </View>
            <View style = {{
                padding: 15,
                paddingTop: 30,
                paddingBottom: 30
            }}>
                <Text style = {{fontSize: 17, fontWeight: 'bold', marginBottom: 20}}>언어</Text>
                <ThemeSelectBtn text = '한국어' value = 'korean' checked = {language} setChecked = {setLanguage} />
                <ThemeSelectBtn text = '영어' value = 'english' checked = {language} setChecked = {setLanguage} />
            </View>
    </View>
  );
}

export default AppSettingScreen;
