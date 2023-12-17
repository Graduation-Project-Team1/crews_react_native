import React from 'react';
import { View, Image } from 'react-native';
import { usePodcastData } from '../../components/PodCastScreen/PodcastContext';


import Header from '../../components/PodCastScreen/PlayerHeader';
import Center from '../../components/PodCastScreen/PlayerCenter';
import Bottom from '../../components/PodCastScreen/PlayerBottom';

import { useRecoilValue } from "recoil";
import { userTeamState } from "../../recoil/teamState";
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

import { PlayerScreenStyles, playListStyles } from '../../styles/PodCastScreen/styles';


const PodcastPlayer = ({navigation}) => {

  const {podcastData} = usePodcastData();
  const currentTeam = useRecoilValue(userTeamState);

  const imgSrc = (id) => {
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

    return(
      <View style={{
        flex: 1,
        flexDirection: 'column',
      }}>
        <Header navigation={navigation}/>
        <Bottom navigation={navigation}/>
        {/* <View style = {[PlayerScreenStyles.img]}> */}
        <Image
          style={[PlayerScreenStyles.img]}
          source={imgSrc(currentTeam && currentTeam.id !== null ? currentTeam.id : 6908)}
        />
        
      </View>
    )
    
}

export default PodcastPlayer;