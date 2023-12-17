import React from 'react';
import { View, Text } from 'react-native';
import { useState, useEffect, useContext } from 'react';
import { Feather, MaterialIcons, FontAwesome5 } from '@expo/vector-icons'; 
import Slider from '@react-native-community/slider';
import { PlayerScreenStyles } from '../../styles/PodCastScreen/styles';
import colors from '../../styles/colors';
import { TouchableOpacity } from 'react-native';
import { Audio } from 'expo-av';
import { usePodcastData } from './PodcastContext';
import { useSoundData } from './SoundContext';

import { ThemeContext } from "styled-components/native";


const Bottom = (props, {navigation}) => {

    const {sound, setSound} = useSoundData();
    const {isPlaying, setIsPlaying} = useSoundData();
    const {duration, setDuration} = useSoundData();
    const {position, setPosition} = useSoundData();

    const {podcastData} = usePodcastData();

    const {playSound, playController} = useSoundData();

    const theme = useContext(ThemeContext);

        useEffect(() => {
                    playController();
                }, [isPlaying]);


    return (
        <View style = {[PlayerScreenStyles.view, {flex: 1, backgroundColor: '#ffffff'}]}>
            <View style = {[PlayerScreenStyles.view, {flex: 2, paddingTop: 90, paddingBottom: 30}]}>
                <Text style = {PlayerScreenStyles.titleText}>{podcastData.time}</Text>
                <Text style = {PlayerScreenStyles.timeText}>{podcastData.title}</Text>
            </View>
            <View style = {PlayerScreenStyles.topBtnView}>
                <TouchableOpacity onPress={()=>{navigation.pop()}}>
                    <MaterialIcons name="playlist-play" size={30} color="black" />
                </TouchableOpacity>
                <TouchableOpacity>
                    <MaterialIcons name="shuffle" size={28} color="black" />
                </TouchableOpacity>
            </View>
            <View style = {{
            flex: 1.5,
            }}>
                <Slider
                    style={{width: 350, height: 20}}
                    minimumValue={0}
                    maximumValue={duration}
                    value={position}
                    onValueChange = {position}
                    minimumTrackTintColor={theme.primary}
                    maximumTrackTintColor='#a0a0a0'
                    thumbTintColor={theme.primary}
                />
                <View style = {{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    paddingHorizontal: 15,
                }}>
                    <Text style = {{fontSize: 12, color: colors.textGray}}>{Math.floor(position/60000)}:{String(Math.floor(position/1000%60)).padStart(2, "0")}</Text>
                    <Text style = {{fontSize: 12, color: colors.textGray}}>{Math.floor(duration/60000)}:{String(Math.floor(duration/1000%60)).padStart(2, "0")}</Text>
                </View>
            </View>
            <View style = {[PlayerScreenStyles.playBtn]}>
                <View><MaterialIcons name="skip-previous" size={50} color="black" /></View>
                <TouchableOpacity onPress={()=>{setIsPlaying(!isPlaying)}}>
                    {isPlaying? <MaterialIcons name="play-arrow" size={50} color="black" />:
                    <MaterialIcons name="pause" size={50} color="black" />}
                </TouchableOpacity>
                <View><MaterialIcons name="skip-next" size={50} color="black" /></View>
            </View>
            <View style = {{
                flex: 3,
            }}/>
            
        </View>
        )
    }

export default Bottom;