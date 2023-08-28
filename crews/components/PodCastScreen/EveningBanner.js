import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { Image } from "react-native";
import colors from '../../styles/PodCastScreen/colors';
import { bannerStyles, viewStyles} from '../../styles/PodCastScreen/styles';


const EveningBanner = (props) =>{
    return(
      <TouchableOpacity style = {[
        bannerStyles.banner,
        {backgroundColor: colors.subColor}
        ]}
        onPress={() => {}}>
        <View style = {{
          padding: 15
          }}>
          <Text style = {[bannerStyles.text]}>오후 4시</Text>
          <Text style = {[bannerStyles.text]}>퇴근길에 함께하는</Text>
          <Text style = {[bannerStyles.text]}>{props.teamName}</Text>
          <Text style = {{color: '#FFFFFF'}}>#{props.hashTag1} #{props.hashTag2} #{props.hashTag3}</Text>
          </View>
        
        <View style = {[bannerStyles.imgView]}>      
          <Image
          style = {[bannerStyles.img]}
          source={require("../../assets/PodCastScreen/image-1.png")}/>
          <View style = {{
          padding: 20
          }}>        
            <Image source={require("../../assets/PodCastScreen/group-17.png")}/>
          </View>
        </View>
      </TouchableOpacity>
      
    )
  }
  

export default EveningBanner;