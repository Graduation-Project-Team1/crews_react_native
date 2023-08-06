import { Text, TouchableOpacity } from 'react-native';
import { Image } from "react-native";
import { viewStyles } from '../../styles/PodCastScreen/styles';

const AlignButton = (props) => {
    return(
    <TouchableOpacity style = {[viewStyles.alignBtn]}>
      <Image source = {require("../../assets/PodCastScreen/filter-list.png")}/>
      <Text>{props.name}</Text>
      <Image source = {require("../../assets/PodCastScreen/trailing-icon.png")}/>
    </TouchableOpacity>
    )
    
  }

export default AlignButton;