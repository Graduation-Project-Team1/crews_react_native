import React, { useContext } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { playListStyles } from '../../styles/PodCastScreen/styles';
import colors from '../../styles/colors';
import { FontAwesome5 } from '@expo/vector-icons';
import { ThemeContext } from 'styled-components';

const PlayList = (props) => {
  const theme = useContext(ThemeContext);
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
          <Text style = {[playListStyles.titleText, {color: theme.text}]}>{props.time}</Text>
          <Text style = {[playListStyles.time]}>{props.hashTag}</Text>
        </View>
        <View style = {[playListStyles.iconView]}>
          <FontAwesome5 name="play" size={15} color={theme.text} />
        </View>
      </TouchableOpacity>
    )
  }

export default PlayList;