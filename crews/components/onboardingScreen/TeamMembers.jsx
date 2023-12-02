import React from 'react';
import { TouchableOpacity } from 'react-native';
import { Text, View } from 'react-native';
import { commonStyle, myMemberStyle } from '../../styles/onboardingScreen/style';
import { useMemberData } from './context';
import colors from '../../styles/colors';
import { Ionicons } from '@expo/vector-icons';


const TeamMembers = (props) => {

    const { memberData } = useMemberData();

    return (
      <TouchableOpacity style = {
        {alignItems: 'center',
        margin: 5,
        width: 110,
        height: 170}
      }
      onPress={props.onPress}>
        <View style = {[myMemberStyle.imageView, memberData === props.id? {borderWidth: 3, borderColor: colors.primary}:{}]}>
          {memberData === props.id? 
            <View style = {{
                position: "absolute", 
                bottom: 0, 
                right: 0,
                backgroundColor: colors.primary,
                height: 25,
                width: 25,
                borderRadius: 20,
                alignItems: 'center',
                justifyContent: 'center',
                }}>
                <Ionicons name="checkmark" size={22} color="white" />
            </View>
            : <></>}
        </View>
        <Text style = {{fontWeight: 'bold'}}>{props.name}</Text>
      </TouchableOpacity>
    )
  }

  export default TeamMembers;