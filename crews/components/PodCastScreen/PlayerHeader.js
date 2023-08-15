import React from 'react';
import { AntDesign, Feather } from '@expo/vector-icons'; 
import { PlayerScreenStyles } from '../../styles/PodCastScreen/styles';

const Header = () => {
    return (
        <View style={[PlayerScreenStyles.view, {flex: 1.5, marginTop: 30}]}>
            <View style ={
                [PlayerScreenStyles.view, {flex: 0.2}]
                }>
                <AntDesign 
                name="down" 
                size={30} 
                color="black"/>
            </View>
            <View style ={[PlayerScreenStyles.view, {flex: 0.6}]}>
                <Text style = {PlayerScreenStyles.headerText}>Podcasts</Text>
            </View>
            <View style ={[PlayerScreenStyles.view, {flex: 0.2}]}>
                <Feather 
                name="more-vertical" 
                size={30} 
                color="black" 
                />
            </View>
        </View>
        )
    }

export default Header;