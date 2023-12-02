import React,{ useEffect } from 'react';
import { TouchableOpacity } from 'react-native';
import { Text, View } from 'react-native';
import colors from '../../styles/colors';

import { commonStyle, swiperStyle, } from '../../styles/onboardingScreen/style';

import { useNicknameData } from './context';


const ProfileNextBtn = (props) => {

    const {nicknameData} = useNicknameData();
  
    useEffect(() => {
    }, [nicknameData]);

    return nicknameData ? 
        (<TouchableOpacity
            onPress={props.onPress}
            style = {[swiperStyle.nextBtn, {backgroundColor: colors.primary}]}>
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

export default ProfileNextBtn;