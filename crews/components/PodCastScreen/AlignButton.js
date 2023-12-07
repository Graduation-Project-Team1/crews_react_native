import { Text, TouchableOpacity } from 'react-native';
import { Image } from "react-native";
import { viewStyles } from '../../styles/PodCastScreen/styles';
import colors from '../../styles/colors';
import { Entypo } from '@expo/vector-icons';

const AlignButton = (props) => {
    return(
    <TouchableOpacity style = {[viewStyles.alignBtn]}>
      <Text style = {{fontSize: 13, color: colors.textGray}}>{props.name}</Text>
      <Entypo name="chevron-small-down" size={24} color={colors.textGray} />
    </TouchableOpacity>
    )
    
  }

export default AlignButton;