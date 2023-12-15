import React,{ useEffect } from 'react';
import { useRecoilState } from 'recoil'
import { userTeamState } from '../../recoil/teamState';
import { TouchableOpacity } from 'react-native';
import { Text, View } from 'react-native';
import colors from '../../styles/colors';
import axios from 'axios';

import { commonStyle, swiperStyle, } from '../../styles/onboardingScreen/style';

import { useMemberData, useNicknameData, useTeamData } from './context';


const StartBtn = ({navigation, setIsLogin}, props) => {


    const {memberData} = useMemberData();
    const {teamData} = useTeamData();
    const {nicknameData} = useNicknameData();

    const [currentTeam, setCurrentTeam] = useRecoilState(userTeamState);
  
    useEffect(() => {
    }, [memberData, teamData, nicknameData]);

    const putUserPref = async() => {
        try {
            const responsePref = await axios.put(`https://crews.jongmin.xyz/member/352/preferences`,
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
                
                setIsLogin(true);

        } catch (error) {
            // Log specific error information
            if (error.response) {
                // The request was made, but the server responded with a status code that falls out of the range of 2xx
                console.error("Server responded with error status:", error.response.status);
                console.error("Server response data:", error.response.data);
            } else if (error.request) {
                // The request was made but no response was received
                console.error("No response received:", error.request);
            } else {
                // Something happened in setting up the request that triggered an error
                console.error("Error setting up the request:", error.message);
            }
            console.error("Error config:", error.config);
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