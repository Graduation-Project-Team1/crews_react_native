import React from 'react';
import { View, Text } from 'react-native';
import { useState, useEffect } from 'react';
import { Feather, MaterialIcons, FontAwesome5 } from '@expo/vector-icons'; 
import Slider from '@react-native-community/slider';
import { PlayerScreenStyles } from '../../styles/PodCastScreen/styles';
import colors from '../../styles/colors';
import { TouchableOpacity } from 'react-native';
import { Audio } from 'expo-av';



const Bottom = (props) => {

    const [sound, setSound] = useState();
    const [isPlaying, setIsPlaying] = useState(false);
    const [podcastId, setPodcastId] = useState();
    const [duration, setDuration] = useState(props.duration);
    const [position, setPosition] = useState('0');
    const [slider, setSlider] = useState();

    const musicStatus = async status => {
        if (!status.isLoaded) {
        if (status.error) {
            console.log(`Error on expo AV: ${status.error}`);
        }
        } else {
        setDuration(status.durationMillis);
        setPosition(status.positionMillis);
        }
    };
    
        async function playSound() {
            console.log('Loading Sound');
            const { sound } = await Audio.Sound.createAsync({uri: props.uri},{ shouldPlay: true }, musicStatus);
            setSound(sound);
        }

        const playController = async () => {
            if (!sound) {
            return;
            }
            isPlaying ? await sound.pauseAsync() : await sound.playAsync();
        };

        useEffect(() => {
            //setPodcastId(props.id);
            if (sound) sound.unloadAsync(); // unload
            playSound();
        }, []);

        useEffect(() => {
            playController();
        }, [isPlaying]);

        // useEffect(() => {
        //     if (sound) sound.unloadAsync(); // unload
        //     playSound();
        // }, [podcastId]);

        const getProgress = () => {
            if (sound === null || duration === null || position === null) return 0;
            let slider = Math.floor((position / duration) * 100);
            //dispatch(setSlider(slider, position, duration));
            setSlider(slider, position, duration)
            return slider;
        };

    return (
        <View style = {[PlayerScreenStyles.view, {flex: 1, backgroundColor: '#ffffff'}]}>
            <View style = {[PlayerScreenStyles.view, {flex: 2, paddingTop: 90, paddingBottom: 40}]}>
                <Text style = {PlayerScreenStyles.titleText}>{props.time}</Text>
                <Text style = {PlayerScreenStyles.timeText}>{props.hashTag}</Text>
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
                maximumValue={duration}
                value={slider}
                onValueChange = {()=>{getProgress()}}
                minimumTrackTintColor={colors.primary}
                maximumTrackTintColor='#a0a0a0'
                thumbTintColor={colors.primary}
            />
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