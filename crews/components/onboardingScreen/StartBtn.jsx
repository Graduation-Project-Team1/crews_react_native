import React,{ useEffect, useState } from 'react';
import { useRecoilState } from 'recoil'
import { userTeamState } from '../../recoil/teamState';
import { TouchableOpacity } from 'react-native';
import { Text, View } from 'react-native';
import colors from '../../styles/colors';
import axios from 'axios';

import { commonStyle, swiperStyle, } from '../../styles/onboardingScreen/style';

import { useMemberData, useNicknameData, useTeamData } from './context';
import { getMemberId } from '../../api/asyncStorage';


const StartBtn = ({navigation, setIsLogin}, props) => {


    const {memberData} = useMemberData();
    const {teamData} = useTeamData();
    const {nicknameData} = useNicknameData();
    const [currentTeam, setCurrentTeam] = useRecoilState(userTeamState);
  
    useEffect(() => {
    }, [memberData, teamData, nicknameData]);

    const putUserPref = async() => {
        console.log("putUserPref");
        console.log("nickname: ", nicknameData);
        console.log("teamData: ", teamData);
        console.log("PlayerData: ", memberData);
        console.log("userId: ", currentTeam.memberId);
        try {
            const responsePref = await axios.put(`https://crews.jongmin.xyz/member/${currentTeam.memberId}/preferences`,
            {
                nickname : nicknameData,
                teamId : teamData,
                playerId : memberData,
            });

                // 성공적인 응답 처리
                console.log(responsePref.data);
                setIsLogin(true);

        } catch (error) {
            // 사용자 정보 없을시 patch로 실행
            try {
                const responsePref = await axios.patch(`https://crews.jongmin.xyz/member/${currentTeam.memberId}/preferences`,
                {
                    nickname : nicknameData,
                    teamId : teamData,
                    playerId : memberData,
                });
    
                    // 성공적인 응답 처리
                    console.log(responsePref.data);
                    setCurrentTeam({
                        ...currentTeam,
                        id: Number(teamData),
                      });
                    
                    navigation.pop();
                }catch(error) {
                    console.log(error);
                }
        }
        
        };

    // const onStart = () => {
    //     console.log("nickname: ", nicknameData);
    //     console.log("teamData: ", teamData);
    //     console.log("PlayerData: ", memberData);
    // }

    return memberData && teamData && nicknameData ? 
        (<TouchableOpacity
            onPress={() => {putUserPref()}}
            style = {[swiperStyle.nextBtn, {backgroundColor: colors.primary}]}>
                <View style = {[commonStyle.alignment]}>
                    <Text style = {[swiperStyle.btnText]}>시작하기</Text>
                </View>
        </TouchableOpacity>):
        (<TouchableOpacity
            style = {[swiperStyle.nextBtn, {backgroundColor: '#dddddd'}]}>
                <View style = {[commonStyle.alignment]}>
                <Text style = {[swiperStyle.btnText]}>{props.message}</Text>
                </View>
        </TouchableOpacity>)
            
    
}

export default StartBtn;