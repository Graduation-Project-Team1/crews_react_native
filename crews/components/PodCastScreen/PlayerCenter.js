import React from 'react';
import { Text, View } from 'react-native';
import { PlayerScreenStyles } from '../../styles/PodCastScreen/styles';


const Center = () => {
    return (
        <View style = {[PlayerScreenStyles.view, {flex: 6}]}>

            <View style = {[PlayerScreenStyles.view, {flex: 7}]}>
            <View style = {PlayerScreenStyles.img}>
            </View>
            </View>
            <View style = {[PlayerScreenStyles.view, {flex: 2}]}>
            <Text style = {PlayerScreenStyles.titleText}>퇴근길의 전북현대</Text>
            <Text style = {PlayerScreenStyles.timeText}>2023년 05월 22일 오후 4시</Text>
            </View>
        </View>
        )
    }

export default Center;