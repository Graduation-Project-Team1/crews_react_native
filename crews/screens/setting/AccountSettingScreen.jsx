import React from "react";
import { View } from "react-native";

import CategoryBtn from "../../components/settingScreen/CategoryBtn";
import CateHeader from "../../components/settingScreen/CateHeader";
import ProfileView from "../../components/settingScreen/ProfileView";
import AccountModal from "../../components/settingScreen/Modal";

const AccountSettingScreen = ({navigation, route}) => {
  const [isLogoutModalVisible, setIsLogoutModalVisible] =  React.useState(false);
  const [isWithdrawModalVisible, setIsWithdrawModalVisible] =  React.useState(false);

  const toggleLogoutModal = () => {
    setIsLogoutModalVisible(!isLogoutModalVisible);
  };

  const toggleWithdrawModal = () => {
    setIsWithdrawModalVisible(!isWithdrawModalVisible);
  };

  console.log(route.params.nickName);
  return (
    <View style = {{
      flex: 1,
      backgroundColor: '#ffffff'
    }}>
      <AccountModal 
      visible = {isLogoutModalVisible} 
      onCancel = {()=>{toggleLogoutModal()}}
      title = "로그아웃 하시겠습니까?"
      detail = "같은 계정을 사용하여 다시 로그인할 수 있습니다."
      yesButton = "로그아웃"
      />
      <AccountModal 
      visible = {isWithdrawModalVisible} 
      onCancel = {()=>{toggleWithdrawModal()}}
      title = "회원 탈퇴 하시겠습니까?"
      detail = {`회원 정보 및 데이터가 삭제되며\n같은 계정으로 재가입이 불가합니다.`}
      yesButton = "탈퇴하기"
      />
      <CateHeader title = '계정 관리' onPress = {()=> navigation.pop()}/>
      <ProfileView nickName = {route.params.nickName}/>
      <CategoryBtn title = '로그아웃' onPress = {()=>{toggleLogoutModal()}}/>
      <CategoryBtn title = '회원 탈퇴' onPress = {()=>{toggleWithdrawModal()}} color = '#ff0000'/>
    </View>
  );
}

export default AccountSettingScreen;
