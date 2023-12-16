import React from 'react';
import { Image, TouchableOpacity } from 'react-native';
import { Text, View } from 'react-native';
import { myTeamStyle, } from '../../styles/onboardingScreen/style';
import { useTeamData } from './context';
import { Ionicons } from '@expo/vector-icons';
import colors from '../../styles/colors';
import Team6908 from '../../assets/team/6908.png';
import Team7644 from '../../assets/team/7644.png';
import Team7645 from '../../assets/team/7645.png';
import Team7646 from '../../assets/team/7646.png';
import Team7648 from '../../assets/team/7648.png';
import Team7649 from '../../assets/team/7649.png';
import Team7652 from '../../assets/team/7652.png';
import Team7653 from '../../assets/team/7653.png';
import Team7650 from '../../assets/team/7650.png';
import Team34220 from '../../assets/team/34220.png';
import Team41261 from '../../assets/team/41261.png';
import Team48912 from '../../assets/team/48912.png';


const SportTeam = ({ name, id, onPress, logo }) => {

    const { teamData } = useTeamData();

    const imgSrc = () => {
        switch (id) {
            case 6908:
                return Team6908;
            case 7644:
                return Team7644;
            case 7645:
                return Team7645;
            case 7646:
                return Team7646;
            case 7648:
                return Team7648;
            case 7649:
                return Team7649;
            case 7652:
                return Team7652;
            case 7653:
                return Team7653;
            case 7650:
                return Team7650;
            case 34220:
                return Team34220;
            case 41261:
                return Team41261;
            case 48912:
                return Team48912;
            default:
                return Team6908;
        }
    }

    return (
        <TouchableOpacity style = {[myTeamStyle.sportTeamView]}
        onPress={() => onPress(name)}>
        <View style = {[myTeamStyle.sportTeamImageView]}>
            {
                <Image style = {[myTeamStyle.sportTeamImage, teamData === id? {borderWidth: 3, borderColor: colors.primary}:{}]} source = {imgSrc()}/>
            }
            {teamData === id? 
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
        
        <Text style = {[myTeamStyle.sportTeamText]}>{name}</Text>
        </TouchableOpacity>
    )
}

export default SportTeam;