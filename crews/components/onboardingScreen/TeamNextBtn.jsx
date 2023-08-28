import React,{ useEffect } from 'react';
import { TouchableOpacity } from 'react-native';
import { Text, View } from 'react-native';

import { commonStyle, swiperStyle, } from '../../styles/onboardingScreen/style';

import { useTeamData } from './context';


const TeamNextBtn = (props) => {

    const {teamData} = useTeamData();
  
    useEffect(() => {
    }, [teamData]);

    return teamData ? 
        (<TouchableOpacity
            onPress={props.onPress}
            style = {[swiperStyle.nextBtn, {backgroundColor: '#276A52'}]}>
                <View style = {[commonStyle.alignment]}>
                    <Text style = {[swiperStyle.btnText]}>다음으로</Text>
                </View>
        </TouchableOpacity>):
        (<TouchableOpacity
            style = {[swiperStyle.nextBtn, {backgroundColor: '#dddddd'}]}>
                <View style = {[commonStyle.alignment]}>
                <Text style = {[swiperStyle.btnText]}>{props.message}</Text>
                </View>
        </TouchableOpacity>)
            
    
}

export default TeamNextBtn;