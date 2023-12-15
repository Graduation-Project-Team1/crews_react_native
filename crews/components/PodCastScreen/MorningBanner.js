import {Text, TouchableOpacity, View } from 'react-native';
import { useState, useEffect, useContext } from 'react';
import { Image } from "react-native";
import { bannerStyles} from '../../styles/PodCastScreen/styles';
import colors from '../../styles/colors';
import { Entypo } from '@expo/vector-icons';

import { ThemeContext } from "styled-components/native";
import OtherTeamButton from "../../components/common/OtherTeamButton";
import { useRecoilValue } from "recoil";
import { otherTeamState } from "../../recoil/teamState";


const MorningBanner = (props) => {

  const theme = useContext(ThemeContext);
  const isOtherTeamMode = useRecoilValue(otherTeamState);

  var hashList = [];
  hashList = props.list;

    return(
      <TouchableOpacity style = {[bannerStyles.banner, {
        backgroundColor: theme.primaryLight,
        }]}>
        
          <Text style = {{fontSize: 14, fontWeight:'bold', marginBottom: 2}}>{props.title}</Text>
          <View style = {{
            flexDirection:'row'
          }}>
            {hashList.map(item => (
              <Text style = {{fontSize: 12, marginRight: 4}}>#{item}</Text>
            ))}
            
          </View>
        
        <View style = {{
          backgroundColor: '#ffffff',
          width: 35,
          height: 35,
          position: 'absolute',
          right: 14,
          borderRadius: 100,
          justifyContent: 'center'
        }}>
        <Entypo style = {{
          position: 'absolute',
          right: 4,
        }}
        name="controller-play" 
        size={25} 
        color={theme.primary}/>
        </View>
      </TouchableOpacity>
      
    )
  }

export default MorningBanner;