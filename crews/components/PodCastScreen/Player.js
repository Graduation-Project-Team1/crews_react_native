import React, {useEffect} from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { Image } from "react-native";
import { playerStyles } from '../../styles/PodCastScreen/styles';
import { MaterialIcons } from '@expo/vector-icons';
import { usePodcastData } from './PodcastContext';
import { useSoundData } from './SoundContext';
import { FontAwesome5 } from '@expo/vector-icons'
import colors from '../../styles/colors';

const Player = (props) => {

  const {podcastData} = usePodcastData();

  const {isPlaying, setIsPlaying} = useSoundData();

  const {playSound, playController} = useSoundData();

      useEffect(() => {
                  playController();
              }, [isPlaying]);


    return(
          <TouchableOpacity 
          style = {[playerStyles.player, {borderBottomColor: colors.dividerGray, borderBottomWidth: 1}]}
          onPress = {() => props.navigation.navigate('PodcastPlayer')}>
            <MaterialIcons style = {{marginLeft: 10}} name="playlist-play" size={35} color="black" />
            <View style = {[playerStyles.textView]}>
              <Text style = {[playerStyles.titleText]}>{podcastData.time}</Text>
              <Text style = {[playerStyles.time]}>#승리 #연승 #패배</Text>
            </View>
            <View style = {[playerStyles.iconView]}>
              <TouchableOpacity>
                <Image 
                  style = {{margin: 10}}
                  source = {require("../../assets/PodCastScreen/nextbutton-11.png")}/>
              </TouchableOpacity>
              <TouchableOpacity 
              onPress={()=>{setIsPlaying(!isPlaying)}}
              >
                {isPlaying? <Image 
                  style = {{margin: 10}}
                  source = {require("../../assets/PodCastScreen/pause-11.png")}/>
                  :<FontAwesome5 name="play" size={16} color="black" style = {{margin: 11}} />}
              </TouchableOpacity>
              <TouchableOpacity>
                <Image 
                  style = {{margin: 10}}
                  source = {require("../../assets/PodCastScreen/nextbutton-12.png")}/>
              </TouchableOpacity>
            </View>
      
          </TouchableOpacity>
    )
  }

export default Player;