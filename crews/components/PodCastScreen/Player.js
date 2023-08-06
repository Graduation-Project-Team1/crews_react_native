import { Text, TouchableOpacity, View } from 'react-native';
import { Image } from "react-native";
import { playerStyles } from '../../styles/PodCastScreen/styles';


const Player = (props) => {
    return(
      <TouchableOpacity style = {[playerStyles.player]}>
        <View style = {{
          flex: 1
        }}>
        <Image source = {require("../../assets/PodCastScreen/artworkso9ttdpyellzpbyfcb22elgt500x500-11.png")}/>
        </View>
        <View style = {[playerStyles.textView]}>
          <Text style = {[playerStyles.titleText]}>{props.title}</Text>
          <Text style = {[playerStyles.time]}>{props.time}</Text>
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