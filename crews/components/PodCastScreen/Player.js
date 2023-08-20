import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { Image } from "react-native";
import { playerStyles } from '../../styles/PodCastScreen/styles';


const Player = ({navigation}) => {
    return(
      <TouchableOpacity 
      style = {[playerStyles.player]}
      onPress = {() => navigation.navigate('PodcastPlayer')}>
        <View style = {{
          flex: 1
        }}>
        <Image source = {require("../../assets/PodCastScreen/artworkso9ttdpyellzpbyfcb22elgt500x500-11.png")}/>
        </View>
        <View style = {[playerStyles.textView]}>
          <Text style = {[playerStyles.titleText]}>하루의 시작 전북현대</Text>
          <Text style = {[playerStyles.time]}>2023년 05월 22일 오전 6시</Text>
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