import React, {useState, useContext} from "react";
import { View, Text, Switch } from "react-native";

import CategoryBtn from "../../components/settingScreen/CategoryBtn";
import CateHeader from "../../components/settingScreen/CateHeader";
import ProfileView from "../../components/settingScreen/ProfileView";

import ToggleSetting from "../../components/settingScreen/ToggleSetting";

import { ThemeContext } from "styled-components/native";


const NotificationSettingScreen = ({navigation}) => {

    const theme = useContext(ThemeContext);
    
    return (
        <View style = {{
        flex: 1,
        backgroundColor: '#ffffff'
        }}>
            <CateHeader title = '알림 설정' onPress = {()=> navigation.pop()}/>
            <View style = {{
                borderBottomWidth: 1,
                borderBottomColor: "#d0d0d0",
                padding: 15,
                paddingTop: 30,
                paddingBottom: 30
            }}>
                <Text style = {{fontSize: 17, fontWeight: 'bold', marginBottom: 30}}>알림 설정</Text>
                <ToggleSetting title = '푸시 알림'/>
                <ToggleSetting title = '우리 팀 알림'/>
                <ToggleSetting title = '내 선수 알림'/>
            </View>
            <View style = {{
                padding: 15,
                paddingTop: 30,
                paddingBottom: 30
            }}>
                <Text style = {{fontSize: 17, fontWeight: 'bold', marginBottom: 30}}>기타</Text>
                <ToggleSetting title = '에티켓 시간' discription = '21시 ~ 07시'/>
            </View>
        </View>
        
    );
}

export default NotificationSettingScreen;
