import React from 'react';
import { TouchableOpacity } from 'react-native';
import { Text } from 'react-native';
import { myTeamStyle, } from '../../styles/onboardingScreen/style';


const SportLeague = ({ title, onPress }) => {
    return(
    <TouchableOpacity style={[myTeamStyle.leagueCategoryView]}
    onPress={onPress}>
        <Text style = {[myTeamStyle.leagueCategoryText]}>{title}</Text>
    </TouchableOpacity>
    )
}

export default SportLeague;