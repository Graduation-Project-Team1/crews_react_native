import React from 'react';
import { TouchableOpacity } from 'react-native';
import { Text, View } from 'react-native';
import { myTeamStyle, } from '../../styles/onboardingScreen/style';
import { useTeamData } from './context';
import { Ionicons } from '@expo/vector-icons';
import colors from '../../styles/colors';


const SportTeam = ({ name, id, onPress }) => {

    const { teamData } = useTeamData();

    return (
        <TouchableOpacity style = {[myTeamStyle.sportTeamView]}
        onPress={() => onPress(name)}>
        <View style = {[myTeamStyle.sportTeamImage, teamData === id? {borderWidth: 3, borderColor: colors.primary}:{}]}>
            {teamData === id? 
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
        
        <Text style = {[myTeamStyle.sportTeamText]}>{name}</Text>
        </TouchableOpacity>
    )
}

export default SportTeam;