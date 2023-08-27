import React from 'react';
import { TouchableOpacity } from 'react-native';
import { Text, View } from 'react-native';
import { commonStyle, myMemberStyle } from '../../styles/onboardingScreen/style';


const TeamMembers = (props) => {

    return (
      <TouchableOpacity style = {[
        commonStyle.alignment,
        {margin: 5}
      ]}
      onPress={props.onPress}>
        <View style = {[myMemberStyle.imageView]}></View>
        <Text style = {{fontWeight: 'bold'}}>{props.name}</Text>
      </TouchableOpacity>
    )
  }

  export default TeamMembers;