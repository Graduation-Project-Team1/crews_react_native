import React from "react";
import { View } from "react-native";

import CategoryBtn from "../../components/settingScreen/CategoryBtn";
import CateHeader from "../../components/settingScreen/CateHeader";
import ProfileView from "../../components/settingScreen/ProfileView";

const AccountSettingScreen = ({navigation}) => {
  return (
    <View style = {{
      flex: 1,
      backgroundColor: '#ffffff'
    }}>
      <CateHeader title = '계정 관리' onPress = {()=> navigation.pop()}/>
      <ProfileView/>
      <CategoryBtn title = '로그아웃'/>
      <CategoryBtn title = '회원 탈퇴' color = '#ff0000'/>
    </View>
  );
}

export default AccountSettingScreen;
