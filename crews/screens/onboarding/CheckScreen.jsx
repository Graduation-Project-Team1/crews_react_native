import React,{ useEffect } from 'react';
import { Text, View } from 'react-native';
import { Image } from 'react-native';
import { Shadow } from 'react-native-shadow-2';
import { commonStyle, checkStyle, } from '../../styles/onboardingScreen/style';
import Logo from '../../assets/logo/logo.svg';
import { LinearGradient } from 'expo-linear-gradient';
import colors from '../../styles/colors';

import StartBtn from '../../components/onboardingScreen/StartBtn';


const Check = ({navigation, setIsLogin}) => {


    return (
        <View style = {{flex:1}}>
            <View  style = {[checkStyle.view]}>
                <Text style = {[checkStyle.text, {fontSize:18, marginBottom: 30}]}>준비가 완료되었습니다!</Text>
                <Shadow
                distance={5}
                offset={[0, 4]}
                >
                    <LinearGradient style={checkStyle.image} colors={[colors.primary, '#1B1DB7d7','#1B1DB7c7', '#1B1DB7b7', '#1B1DB7a7']}>
                        <Logo width = {80} height = {80}/>
                    </LinearGradient>
                </Shadow>
                <Text style = {[checkStyle.text, {marginTop: 33}]}>CREWS와 함께</Text>
                <Text style = {[checkStyle.text]}>즐거운 스포츠 생활을 시작해보세요 🎉</Text>
            </View>
            <View style = {{
                alignItems: 'center',
                marginBottom: 10
            }}>
                < StartBtn
                    navigation={navigation}
                    onPress = {() => {}}
                    message = '정보를 모두 입력해주세요'
                    setIsLogin = {setIsLogin}
                />
            </View>
        </View>
    )
}

export default Check;