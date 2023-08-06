import { Text, TouchableOpacity, View } from 'react-native';
import { Image } from "react-native";
import { playListStyles } from '../../styles/PodCastScreen/styles';


const PlayList = (props) => {
    return(
      <TouchableOpacity style = {[playListStyles.list]}>
        <View style = {{
          flex: 1
        }}>
          <Image
          style = {[playListStyles.img]}
          source = {require("../../assets/PodCastScreen/artworkso9ttdpyellzpbyfcb22elgt500x500-11.png")}/>
        </View>
        <View style = {[playListStyles.textView]}>
          <Text style = {[playListStyles.titleText]}>{props.title}</Text>
          <Text style = {[playListStyles.time]}>{props.time}</Text>
        </View>
        <View style = {[playListStyles.iconView]}>
          <Image source = {require("../../assets/PodCastScreen/icon2.png")}/>
        </View>
  
      </TouchableOpacity>
    )
  }

export default PlayList;