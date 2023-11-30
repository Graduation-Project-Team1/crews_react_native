import React from "react";
import { View, Text } from "react-native";

import CategoryBtn from "../../components/settingScreen/CategoryBtn";
import CateHeader from "../../components/settingScreen/CateHeader";
import ProfileView from "../../components/settingScreen/ProfileView";

import colors from "../../styles/colors";

const ExtraSettingScreen = ({navigation}) => {
  return (
    <View style = {{
      flex: 1,
      backgroundColor: '#ffffff'
    }}>
      <CateHeader title = '기타 설정' onPress = {()=> navigation.pop()}/>

      <View style = {{
        paddingTop: 20,
        paddingBottom: 10,
        marginBottom: 10,
        borderBottomColor: colors.dividerGray,
        borderBottomWidth: 1
      }}>
        <CategoryBtn title = '사용 설명서'/>
        <CategoryBtn title = '라이센스'/>
        <CategoryBtn title = '이용 약관'/>
      </View>
      <Text style = {{fontSize: 13, color: colors.textGray, textAlign: 'center'}}>CREWS | 1.0.0 ver</Text>
      
    </View>
  );
}

export default ExtraSettingScreen;
