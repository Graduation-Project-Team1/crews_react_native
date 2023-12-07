import { Text, TouchableOpacity, View } from 'react-native';
import { Image } from "react-native";
import { playListStyles } from '../../styles/PodCastScreen/styles';
import colors from '../../styles/colors';
import { FontAwesome5 } from '@expo/vector-icons';

const PlayList = (props) => {
    return(
      <TouchableOpacity 
      onPress={props.onPress}
      style = {[playListStyles.list]}>
        <View style = {
          [playListStyles.id]
        }>
          <Text style = {{color: colors.textGray }}>{props.id}</Text>
        </View>
        <View style = {[playListStyles.textView]}>
          <Text style = {[playListStyles.titleText]}>{props.time}</Text>
          <Text style = {[playListStyles.time]}>{props.hashTag}</Text>
        </View>
        <View style = {[playListStyles.iconView]}>
          <FontAwesome5 name="play" size={15} color="black" />
        </View>
      </TouchableOpacity>
    )
  }

export default PlayList;