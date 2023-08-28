import React,{ useEffect } from 'react';
import { Text, View } from 'react-native';
import { Image } from 'react-native';
import { Shadow } from 'react-native-shadow-2';
import { commonStyle, checkStyle, } from '../../styles/onboardingScreen/style';
import { useNicknameData } from './context';


const Check = () => {

    const {nicknameData} = useNicknameData();

    useEffect(() => {
    }, [nicknameData]);

    return (
        <View style = {{flex:1}}>
        <View style = {[checkStyle.headerView]}>
            <Text style = {[commonStyle.boldText]}>등록 정보를 확인하세요</Text>
            <Text style = {[commonStyle.text]}>수정을 원한다면 이전으로 돌아가 수정해주세요.</Text>
            <Text style = {[commonStyle.text]}>등록 후에도 프로필 편집을 통해 수정이 가능합니다.</Text>
        </View>
        <View style = {[checkStyle.profileView]}>
            <Shadow
            distance={15}
            offset={[6, 6]}
            >
            <View style = {{
                borderRadius: 103
            }}>
                <Image
                style = {[checkStyle.image]}
                source = {require('../../assets/onboarding/user.png')}
                />
            </View>
            </Shadow>
            <View style = {[checkStyle.nicknameView]}>
            <Text style = {[checkStyle.nickname]}>{nicknameData}</Text>
            <Text style = {[checkStyle.text]}>님</Text>
            </View> 
        </View>
        </View>
    )
}

export default Check;