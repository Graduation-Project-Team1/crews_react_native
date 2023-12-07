import React from "react";
import { useState, useEffect } from 'react';
import { Text, View, TouchableOpacity } from "react-native";
import { AntDesign } from '@expo/vector-icons'; 
import axios from 'axios';

import CategoryBtn from "../../components/settingScreen/CategoryBtn";

const SettingScreen = ({navigation}) => {

    const [userDataRes, setUserDataRes] = useState([]);
    const [userName, setUserName] = useState([]);
    const [userTeam, setUserTeam] = useState([]);
    const [userPlayer, setUserPlayer] = useState([]);

    useEffect(() => {
        const getUserdata = async() => {
            try {
                const responseUserdata = await axios.get(`http://crews.jongmin.xyz:8080/data/onboard?userId=123`);
    
                    // 성공적인 응답 처리
                    console.log(responseUserdata.data);
                    console.log("getUserdata: 성공");

                    //파라미터 만들어진 후 삭제
                    const exUserData = responseUserdata.data.find(item => item.nickname === "유저1");
                    console.log(exUserData);

                    setUserDataRes(exUserData);
                    setUserName(exUserData.nickname);

            } catch (error) {
                // Axios 오류 처리
                console.error(error);
            }
        };

        // const getUserTeam = async() => {
        //     try {
        //         const responseUserTeam = await axios.get(`http://crews.jongmin.xyz:8080/data/team?teamId=${userDataRes.teamId}`);
    
        //             // 성공적인 응답 처리
        //             console.log(responseUserTeam.data);
        //             console.log("getUserTeam: 성공");

        //             setUserTeam(responseUserTeam.data.teamName);

        //     } catch (error) {
        //         // Axios 오류 처리
        //         console.error(error);
        //     }
        // };

        // const getUserPlayer = async() => {
        //     try {
        //         const responseUserPlayer = await axios.get(`http://crews.jongmin.xyz:8080/data/player?playerId=${userDataRes.playerId}`);
    
        //             // 성공적인 응답 처리
        //             console.log(responseUserPlayer.data);
        //             console.log("getUserPlayer: 성공");

        //             setUserPlayer(responseUserPlayer.data.name);


        //     } catch (error) {
        //         // Axios 오류 처리
        //         console.error(error);
        //     }
        // };
    
        getUserdata();
        //getUserTeam();
        //getUserPlayer();

        //console.log("MyTeamScreen: teamList 데이터가 변경됨(*화면 실행시에도 이 메세지가 출력됨)")
        //console.log("onleague: ", onLeague);
    }, [userName]);

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
