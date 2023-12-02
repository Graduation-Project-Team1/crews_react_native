import {Text, TouchableOpacity, View } from 'react-native';
import { Image } from "react-native";
import { bannerStyles} from '../../styles/PodCastScreen/styles';
import colors from '../../styles/colors';
import { Entypo } from '@expo/vector-icons';

const MorningBanner = (props) => {

  var hashList = [];
  hashList = props.list;

    return(
      <TouchableOpacity style = {[bannerStyles.banner]}>
        
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
        color={colors.primary}/>
        </View>
      </TouchableOpacity>
      
    )
  }

export default MorningBanner;