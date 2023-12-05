import React from 'react';
import { View, Text, Audio } from 'react-native';
import { useState, useEffect } from 'react';
import { Feather, MaterialIcons, FontAwesome5 } from '@expo/vector-icons'; 
import Slider from '@react-native-community/slider';
import { PlayerScreenStyles } from '../../styles/PodCastScreen/styles';
import colors from '../../styles/colors';
import { TouchableOpacity } from 'react-native';

const useAudio = url => {
        const [audio] = useState(new Audio(url));
        const [playing, setPlaying] = useState(false);
    
        const toggle = () => setPlaying(!playing);
    
        useEffect(() => {
            playing ? audio.play() : audio.pause();
        },
        [playing]
        );
    
        useEffect(() => {
        audio.addEventListener('ended', () => setPlaying(false));
        return () => {
            audio.removeEventListener('ended', () => setPlaying(false));
        };
        }, []);
    
        return [playing, toggle];
    };
  

const Bottom = (props) => {
    //const [playing, toggle] = useAudio(props.url);

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
                maximumValue={1}
                minimumTrackTintColor={colors.primary}
                maximumTrackTintColor='#a0a0a0'
                thumbTintColor={colors.primary}
            />
            </View>
            <View style = {[PlayerScreenStyles.playBtn]}>
                <View><MaterialIcons name="skip-previous" size={50} color="black" /></View>
                <TouchableOpacity onPress={()=>{/*toggle*/}}>
                    <MaterialIcons name="pause" size={50} color="black" />
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