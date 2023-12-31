import React from 'react';
import { Image, TouchableOpacity } from 'react-native';
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
        width: 100,
        height: 170}
      }
      onPress={props.onPress}>
        <View style = {[myMemberStyle.imageViewContainer]}>
          <Image style = {[myMemberStyle.imageView, memberData === props.id? {borderWidth: 3, borderColor: colors.primary}:{}]} source = {{uri: props.photo}}/>
          {memberData === props.id? 
            <View style = {{
                position: "absolute", 
                bottom: 8, 
                right: 5,
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