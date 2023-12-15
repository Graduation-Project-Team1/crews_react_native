import React from "react";
import { useState, useEffect, useContext } from 'react';
import { Text, View, TouchableOpacity } from "react-native";
import { AntDesign } from '@expo/vector-icons'; 
import axios from 'axios';
import { ThemeContext } from "styled-components/native";

import CategoryBtn from "../../components/settingScreen/CategoryBtn";
    

const SettingScreen = ({navigation}) => {

    const [userName, setUserName] = useState(['user']);
    const [userTeam, setUserTeam] = useState(['teamname']);
    const [userPlayer, setUserPlayer] = useState(['playername']);
    const [userId, setUserId] = useState(352);
    
    const theme = useContext(ThemeContext);

    useEffect(() => {
        const getUserdata = async() => {
            try {
                const responseUserdata = await axios.get(`https://crews.jongmin.xyz/member/${userId}`);
    
                    // 성공적인 응답 처리
                    console.log(responseUserdata.data);
                    console.log("getUserdata: 성공");

                    setUserName(responseUserdata.data.nickname);
                    setUserTeam(responseUserdata.data.teamName);
                    setUserPlayer(responseUserdata.data.playerName);

                    console.log(userName);
                    console.log(userTeam);
                    console.log(userPlayer);

            } catch (error) {
                // Axios 오류 처리
                console.error(error);
            }
        };

    
        getUserdata();

    }, [userName, userTeam, userPlayer]);

  return (
    <View style = {{flex: 1}}>
        <View style = {{
            flex: 3.5,
            backgroundColor: theme.primary,
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
                <Text style = {{color: '#ffffff', fontSize: 20, fontWeight: 'bold', marginTop: 15}}>{userName}</Text>
                <Text style = {{color: '#ffffff', fontSize: 16, marginTop: 5}}>{userTeam} / {userPlayer}</Text>
            </View>
        </View>

        <View style = {{
            flex: 5, 
            backgroundColor: '#ffffff',
            paddingTop: 15
        }}>
            <CategoryBtn title = '프로필 수정' onPress = {() => navigation.navigate('ProfileSettingScreen')}/>
            <CategoryBtn title = '계정 관리' onPress = {() => navigation.navigate('AccountSettingScreen', {nickName: userName})}/>
            <CategoryBtn title = '알림 설정' onPress = {() => navigation.navigate('NotificationSettingScreen')}/>
            <CategoryBtn title = '앱 설정' onPress = {() => navigation.navigate('AppSettingScreen')}/>
            <CategoryBtn title = '기타' onPress = {() => navigation.navigate('ExtraSettingScreen')}/>
            
        </View>
      
    </View>
  );
};

export default SettingScreen;
