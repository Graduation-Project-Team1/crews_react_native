import React from 'react';
import { View } from 'react-native';


import Header from '../../components/homeScreen/Header';
import Center from '../../components/PodCastScreen/PlayerCenter';
import Bottom from '../../components/PodCastScreen/PlayerBottom';

const PodcastPlayer = ({navigation}) => {
    return(
      <View style={{
        flex: 1,
        backgroundColor: '#D4E1DC',
        flexDirection: 'column',
      }}>
        <Header/>
        <Center/>
        <Bottom/>
      </View>
    )
    
}

export default PodcastPlayer;