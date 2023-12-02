import React from 'react';
import { View, Text } from 'react-native';
import { Feather, MaterialIcons, FontAwesome5 } from '@expo/vector-icons'; 
import Slider from '@react-native-community/slider';
import { PlayerScreenStyles } from '../../styles/PodCastScreen/styles';
import colors from '../../styles/colors';


const Bottom = () => {
    return (
        <View style = {[PlayerScreenStyles.view, {flex: 1, backgroundColor: '#ffffff'}]}>
            <View style = {[PlayerScreenStyles.view, {flex: 2, paddingTop: 90, paddingBottom: 40}]}>
                <Text style = {PlayerScreenStyles.titleText}>2023.08.06</Text>
                <Text style = {PlayerScreenStyles.timeText}>#승리 #패배 #경기</Text>
            </View>
            <View style = {PlayerScreenStyles.topBtnView}>
                <View>
                    <MaterialIcons name="playlist-play" size={30} color="black" />
                </View>
                <View>
                    <MaterialIcons name="shuffle" size={28} color="black" />
                </View>
            </View>
            <View style = {{
            flex: 2,
            }}>
            <Slider
                style={{width: 350, height: 30}}
                minimumValue={0}
                maximumValue={1}
                minimumTrackTintColor={colors.primary}
                maximumTrackTintColor='#a0a0a0'
                thumbTintColor={colors.primary}
            />
            </View>
            <View style = {[PlayerScreenStyles.playBtn]}>
                <View><MaterialIcons name="skip-previous" size={50} color="black" /></View>
                <View><MaterialIcons name="pause" size={50} color="black" /></View>
                <View><MaterialIcons name="skip-next" size={50} color="black" /></View>
            </View>
            <View style = {{
                flex: 3,
            }}/>
            
        </View>
        )
    }

export default Bottom;