import {Text, TouchableOpacity, View } from 'react-native';
import { Image } from "react-native";
import { bannerStyles} from '../../styles/PodCastScreen/styles';

const MorningBanner = (props) => {
    return(
      <TouchableOpacity style = {[bannerStyles.banner]}>
        <View style = {{
          padding: 15
          }}>
          <Text style = {[bannerStyles.text]}>오전 6시</Text>
          <Text style = {[bannerStyles.text]}>하루를 시작하는</Text>
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

export default MorningBanner;