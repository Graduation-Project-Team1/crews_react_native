import React from 'react';
import { View } from 'react-native';
import { usePodcastData } from '../../components/PodCastScreen/PodcastContext';


import Header from '../../components/PodCastScreen/PlayerHeader';
import Center from '../../components/PodCastScreen/PlayerCenter';
import Bottom from '../../components/PodCastScreen/PlayerBottom';

import { PlayerScreenStyles, playListStyles } from '../../styles/PodCastScreen/styles';


const PodcastPlayer = ({navigation}) => {

  const {podcastData} = usePodcastData();

    return(
      <View style={{
        flex: 1,
        flexDirection: 'column',
      }}>
        <Header/>
        <Bottom/>
        <View style = {[PlayerScreenStyles.img]}>
        </View>
      </View>
    )
    
}

export default PodcastPlayer;