import React,{ useEffect } from 'react';
import { TouchableOpacity } from 'react-native';
import { Text, View } from 'react-native';
import colors from '../../styles/colors';

import { commonStyle, swiperStyle, } from '../../styles/onboardingScreen/style';

import { useMemberData, useNicknameData, useTeamData } from './context';


const StartBtn = ({navigation}, props) => {

    const {memberData} = useMemberData();
    const {teamData} = useTeamData();
    const {nicknameData} = useNicknameData();
  
    useEffect(() => {
    }, [memberData, teamData, nicknameData]);

    const onStart = () => {
        console.log("nickname: ", nicknameData);
        console.log("teamData: ", teamData);
        console.log("PlayerData: ", memberData);
    }

    return memberData && teamData && nicknameData ? 
        (<TouchableOpacity
            onPress={() => {onStart();}}
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