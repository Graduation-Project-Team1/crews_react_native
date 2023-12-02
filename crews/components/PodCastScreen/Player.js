import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { Image } from "react-native";
import { playerStyles } from '../../styles/PodCastScreen/styles';
import { MaterialIcons } from '@expo/vector-icons';

const Player = ({navigation}) => {
    return(
      <TouchableOpacity 
      style = {[playerStyles.player]}
      onPress = {() => navigation.navigate('PodcastPlayer')}>
        <MaterialIcons style = {{marginLeft: 10}} name="playlist-play" size={35} color="black" />
        <View style = {[playerStyles.textView]}>
          <Text style = {[playerStyles.titleText]}>2023.05.22 (월)</Text>
          <Text style = {[playerStyles.time]}>#승리 #연승 #패배</Text>
        </View>
        <View style = {[playerStyles.iconView]}>
          <Image 
            style = {{margin: 10}}
            source = {require("../../assets/PodCastScreen/nextbutton-11.png")}/>
          <Image 
            style = {{margin: 10}}
            source = {require("../../assets/PodCastScreen/pause-11.png")}/>
          <Image 
            style = {{margin: 10}}
            source = {require("../../assets/PodCastScreen/nextbutton-12.png")}/>
        </View>
  
      </TouchableOpacity>
    )
  }

export default Player;