import React from "react";
import { Text, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { AntDesign } from '@expo/vector-icons'; 

import CategoryBtn from "../../components/settingScreen/CategoryBtn";

const SettingScreen = ({navigation}) => {
  return (
    <View style = {{flex: 1}}>
        <View style = {{
            flex: 4,
            backgroundColor: '#1B1DB7',
        }}>
            <View style = {{alignItems: 'flex-start'}}>
                <TouchableOpacity 
                onPress={()=> navigation.pop()}
                style = {{ 
                    margin: 10,
                    marginTop: 30,
                    width: 30, 
                    height: 30,
                    alignItems: 'center',
                    justifyContent: 'center'
                }}>
                    <AntDesign 
                        name="left" 
                        size={17} 
                        color="white"/>
                </TouchableOpacity>
            </View>
            
            <View style = {{
                alignItems: 'center',
                justifyContent: 'center'
            }}>
                <View style = {{
                    width: 100,
                    height: 100,
                    backgroundColor: '#dddddd',
                    borderRadius: 100,
                    marginBottom: 10,
                }}/>
                <Text style = {{color: '#ffffff', fontSize: 20, fontWeight: 'bold', marginTop: 15}}>크루즈</Text>
                <Text style = {{color: '#ffffff', fontSize: 15, marginTop: 5}}>전북 현대 모터스 / 정태욱 선수</Text>
            </View>
        </View>

        <View style = {{
            flex: 5, 
            backgroundColor: '#ffffff',
            paddingTop: 15
        }}>
            <CategoryBtn title = '프로필 수정' onPress = {() => navigation.navigate('ProfileSettingScreen')}/>
            <CategoryBtn title = '계정 관리' onPress = {() => navigation.navigate('AccountSettingScreen')}/>
            <CategoryBtn title = '알림 설정' onPress = {() => navigation.navigate('ProfileSettingScreen')}/>
            <CategoryBtn title = '앱 설정' onPress = {() => navigation.navigate('ProfileSettingScreen')}/>
            <CategoryBtn title = '기타' onPress = {() => navigation.navigate('ProfileSettingScreen')}/>
            
        </View>
      
    </View>
  );
};

export default SettingScreen;
