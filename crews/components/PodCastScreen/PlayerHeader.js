import React, {useContext} from 'react';
import { Text, View } from 'react-native';
import { AntDesign, Feather, Entypo } from '@expo/vector-icons'; 
import { PlayerScreenStyles } from '../../styles/PodCastScreen/styles';
import colors from '../../styles/colors';

import { ThemeContext } from "styled-components/native";

  


const Header = () => {

    const theme = useContext(ThemeContext);

    return (
        <View style = {{flex: 1, backgroundColor: theme.primaryLight}}>
            <View style={[PlayerScreenStyles.view, {height: 100, flexDirection: 'row'}]}>
                <View style ={
                    [PlayerScreenStyles.view, {flex: 0.2}]
                    }>
                    <Entypo name="chevron-small-down" size={30} color="#00000057" />
                </View>
                <View style ={[PlayerScreenStyles.view, {flex: 0.6}]}>
                    <Text style = {PlayerScreenStyles.headerText}>라디오</Text>
                </View>
                <View style ={[PlayerScreenStyles.view, {flex: 0.2}]}>
                    <Entypo name="dots-three-vertical" size={20} color="#00000057" />
                </View>
            </View>
        </View>
        )
    }

export default Header;