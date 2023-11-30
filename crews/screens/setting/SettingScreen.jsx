import React from "react";
import { useEffect } from 'react';
import { Text, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { AntDesign } from '@expo/vector-icons'; 
import axios from 'axios';

import CategoryBtn from "../../components/settingScreen/CategoryBtn";

const SettingScreen = ({navigation}) => {

    useEffect(() => {
        const getUserdata = async() => {
            try {
                const responseUserdata = await axios.get(`18.181.69.27:8080/data/onboard`);
    
                    // 성공적인 응답 처리
                    console.log(responseUserdata.data);
                    console.log("getLeagueList: 성공");
    
            } catch (error) {
                // Axios 오류 처리
                
                console.error(error);
                
            }
        };
    
        getUserdata();

        //console.log("MyTeamScreen: teamList 데이터가 변경됨(*화면 실행시에도 이 메세지가 출력됨)")
        //console.log("onleague: ", onLeague);
    }, []);

  return (
    <View style = {{flex: 1}}>
        <View style = {{
            flex: 3.5,
            backgroundColor: '#1B1DB7',
        }}>
            <View style = {{
                alignItems: 'flex-start',
                position: 'absolute',
                top: 0
                }}>
                <TouchableOpacity 
                onPress={()=> navigation.pop()}
                style = {{ 
                    margin: 10,
                    marginTop: 40,
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
                flex: 1,
                alignItems: 'center',
                justifyContent: 'center',
                marginTop: 50,
            }}>
                <View style = {{
                    width: 90,
                    height: 90,
                    backgroundColor: '#dddddd',
                    borderRadius: 100,
                    marginBottom: 10,
                }}/>
                <Text style = {{color: '#ffffff', fontSize: 20, fontWeight: 'bold', marginTop: 15}}>크루즈</Text>
                <Text style = {{color: '#ffffff', fontSize: 16, marginTop: 5}}>전북 현대 모터스 / 정태욱 선수</Text>
            </View>
        </View>

        <View style = {{
            flex: 5, 
            backgroundColor: '#ffffff',
            paddingTop: 15
        }}>
            <CategoryBtn title = '프로필 수정' onPress = {() => navigation.navigate('ProfileSettingScreen')}/>
            <CategoryBtn title = '계정 관리' onPress = {() => navigation.navigate('AccountSettingScreen')}/>
            <CategoryBtn title = '알림 설정' onPress = {() => navigation.navigate('NotificationSettingScreen')}/>
            <CategoryBtn title = '앱 설정' onPress = {() => navigation.navigate('AppSettingScreen')}/>
            <CategoryBtn title = '기타' onPress = {() => navigation.navigate('ExtraSettingScreen')}/>
            
        </View>
      
    </View>
  );
};

export default SettingScreen;
