import React from 'react';
import { TouchableOpacity } from 'react-native';
import { Text, View } from 'react-native';
import { myTeamStyle, } from '../../styles/onboardingScreen/style';


const SportTeam = ({ name, onPress }) => {

    return (
        <TouchableOpacity style = {[myTeamStyle.sportTeamView]}
        onPress={() => onPress(name)}>
        <View style = {[myTeamStyle.sportTeamImage]}></View>
        <Text style = {[myTeamStyle.sportTeamText]}>{name}</Text>
        </TouchableOpacity>
    )
}

export default SportTeam;