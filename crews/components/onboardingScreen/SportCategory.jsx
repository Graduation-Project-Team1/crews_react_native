import React from 'react';
import { TouchableOpacity } from 'react-native';
import { Text } from 'react-native';
import { myTeamStyle, } from '../../styles/onboardingScreen/style';


const SportCategory = ({ title, onPress }) => {
    return (
      <TouchableOpacity 
        style={[myTeamStyle.categoryView]}
        onPress={onPress}>
        <Text style={[myTeamStyle.categoryText]}>{title}</Text>
      </TouchableOpacity>
    )
  }

export default SportCategory;