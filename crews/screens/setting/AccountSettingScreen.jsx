import React from "react";
import { Text, View, Button, TouchableOpacity } from "react-native";
import { AntDesign } from "@expo/vector-icons";

import CategoryBtn from "../../components/settingScreen/CategoryBtn";

const AccountSettingScreen = ({navigation}) => {
  return (
    <View style = {{
      flex: 1,
      backgroundColor: '#ffffff'
    }}>
      <View style = {{
        height: 50,
        marginTop: 25,
        padding: 10,
        flexDirection: 'row',
        alignItems: 'center'
      }}>
        <TouchableOpacity 
        onPress={()=> navigation.pop()}
        style = {{ 
            alignItems: 'center',
            justifyContent: 'center'
        }}>
            <AntDesign 
            name="left" 
            size={17} 
            color="black"/>
        </TouchableOpacity>
        <Text style = {{fontSize: 15, fontWeight: 'bold'}}>계정 관리</Text>
      </View>
      <View style = {{
        height: 100,
        backgroundColor: '#b0b0b0'
      }}>

      </View>
      <CategoryBtn title = '로그아웃'/>
      <CategoryBtn title = '회원 탈퇴'/>
    </View>
  );
};

export default AccountSettingScreen;
