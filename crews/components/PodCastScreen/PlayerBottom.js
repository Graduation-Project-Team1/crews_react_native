import React from 'react';
import { View } from 'react-native';
import { Feather, Entypo, FontAwesome5 } from '@expo/vector-icons'; 
import Slider from '@react-native-community/slider';
import { PlayerScreenStyles } from '../../styles/PodCastScreen/styles';


const Bottom = () => {
    return (
        <View style = {[PlayerScreenStyles.view, {flex: 3}]}>
            <View style = {PlayerScreenStyles.topBtnView}>
            <View style = {{
                flex: 1,
                alignItems: 'flex-start'
            }}>
                <Feather name="list" size={24} color="black"/>
            </View>
            <View style = {{
                flex: 1,
                alignItems: 'center'
            }}>
                <Entypo name="shuffle" size={24} color="black" />
            </View>
            <View style = {{
                flex: 1,
                alignItems: 'flex-end'
            }}>
                <Feather name="repeat" size={24} color="black" />
            </View>
            
            </View>
            <View style = {{
            flex: 2,
            }}>
            <Slider
                style={{width: 320, height: 40}}
                minimumValue={0}
                maximumValue={1}
                minimumTrackTintColor="#FFFFFF"
                maximumTrackTintColor="#000000"
                thumbTintColor='#FFFFFF'
            />
            </View>
            <View style = {[PlayerScreenStyles.playBtn]}>
                <View style = {{flex: 1}}><FontAwesome5 name="step-backward" size={40} color="black" /></View>
                <View style = {{flex: 1}}><FontAwesome5 name="play" size={35} color="black" /></View>
                <View style = {{flex: 1}}><FontAwesome5 name="step-forward" size={40} color="black" /></View>
            </View>
            <View style = {{
                flex: 3,
            }}/>
            
        </View>
        )
    }

export default Bottom;