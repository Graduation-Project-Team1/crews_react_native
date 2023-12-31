import React from "react";
import { useState, useEffect, useContext } from 'react';
import { Text, View, TouchableOpacity, Image } from "react-native";
import { AntDesign } from '@expo/vector-icons'; 
import axios from 'axios';
import { ThemeContext } from "styled-components/native";

import CategoryBtn from "../../components/settingScreen/CategoryBtn";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import { userTeamState } from "../../recoil/teamState";
import Team6908 from '../../assets/team/6908.png';
import Team7644 from '../../assets/team/7644.png';
import Team7645 from '../../assets/team/7645.png';
import Team7646 from '../../assets/team/7646.png';
import Team7648 from '../../assets/team/7648.png';
import Team7649 from '../../assets/team/7649.png';
import Team7652 from '../../assets/team/7652.png';
import Team7653 from '../../assets/team/7653.png';
import Team7650 from '../../assets/team/7650.png';
import Team34220 from '../../assets/team/34220.png';
import Team41261 from '../../assets/team/41261.png';
import Team48912 from '../../assets/team/48912.png';
import { getMemberId } from "../../api/asyncStorage";
    

const SettingScreen = ({navigation}) => {
    const [currentState, setCurrentState] = useRecoilState(userTeamState);
    const [memberId, setMemberId] = useState(0);
    const [userTeam, setUserTeam] = useState('전북현대'); // [userTeam, setUserTeam
    const [userName, setUserName] = useState(['user']);
    const [userPlayer, setUserPlayer] = useState(['playername']);
    
    const theme = useContext(ThemeContext);

    const imgSrc = (id) => {
        switch (id) {
            case 6908:
                return Team6908;
            case 7644:
                return Team7644;
            case 7645:
                return Team7645;
            case 7646:
                return Team7646;
            case 7648:
                return Team7648;
            case 7649:
                return Team7649;
            case 7652:
                return Team7652;
            case 7653:
                return Team7653;
            case 7650:
                return Team7650;
            case 34220:
                return Team34220;
            case 41261:
                return Team41261;
            case 48912:
                return Team48912;
            default:
                return Team6908;
        }
    }

    useEffect(() => {
        getMemberId().then((memberId) => {
            if (memberId === null) {
                console.log("memberId is null");
            } else {
                console.log(memberId);
                setMemberId(memberId);
                setCurrentState({
                    ...currentState,
                    memberId: memberId,
                });
            }
        });
    }, []);

    useEffect(() => {
        if (memberId === 0) {
            return;
        }
        const getUserdata = async() => {
            try {
                const responseUserdata = await axios.get(`https://crews.jongmin.xyz/member/${memberId}`);
    
                    // 성공적인 응답 처리
                    console.log(responseUserdata.data);
                    console.log("getUserdata: 성공");

                    setUserTeam(responseUserdata.data.teamName);
                    setUserName(responseUserdata.data.nickname);
                    setUserPlayer(responseUserdata.data.playerName);
                    setCurrentState({
                        ...currentState,
                        name: responseUserdata.data.teamName,
                        id: responseUserdata.data.teamId,
                        playerName: responseUserdata.data.playerName,
                        playerId: responseUserdata.data.playerId,
                        memberName: responseUserdata.data.nickname,
                    });

                    console.log(userName);

            } catch (error) {
                // Axios 오류 처리
                console.error(error);
            }
        };

    
        getUserdata();

    }, [memberId]);

  return (
    <View style = {{flex: 1}}>
        <View style = {{
            flex: 3.5,
            backgroundColor: theme.pointBackground,
        }}>
            <View style = {{
                alignItems: 'flex-start',
                top: 0
                }}>
                <TouchableOpacity 
                onPress={()=> {navigation.pop()}}
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
                        size={20} 
                        color="white"/>
                </TouchableOpacity>
            </View>
            
            <View style = {{
                flex: 0.8,
                alignItems: 'center',
                justifyContent: 'center',
            }}>
                <Image style = {{
                    width: 90,
                    height: 90,
                    borderRadius: 100,
                    marginBottom: 10,
                }} source={imgSrc(userTeam && userTeam)}/>
                <Text style = {{color: '#FFFFFF', fontSize: 20, fontWeight: 'bold', marginTop: 15}}>{userName}</Text>
                <Text style = {{color: '#ffffff', fontSize: 16, marginTop: 5}}>{userTeam} / {userPlayer}</Text>
            </View>
        </View>

        <View style = {{
            flex: 5, 
            backgroundColor: theme.background,
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
