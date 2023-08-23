import { StatusBar } from 'expo-status-bar';
import { ScrollView, Text, View } from 'react-native';
import MorningBanner from '../../components/PodCastScreen/MorningBanner.js';
import EveningBanner from '../../components/PodCastScreen/EveningBanner.js';
import AlignButton from '../../components/PodCastScreen/AlignButton.js';
import PlayList from '../../components/PodCastScreen/PlayList.js';
import Player from '../../components/PodCastScreen/Player.js';
import PodcastList from '../../components/PodCastScreen/PodcastItems.js';

const PodCastScreen = ({navigation}) => {
  return (
    <View style = {{
      flex: 1
    }}>
      <View style = {{
        flex: 8
        }}>
          <View style = {{
          margin: 30
          }}>

          <View style = {{
            marginTop: 20,
            marginBottom: 20
          }}>
            <Text style = {{fontWeight: 'bold'}}>2023년 05월 22일 </Text>
            <Text style = {{fontWeight: 'bold'}}>팟캐스트 </Text>
          </View>
          
          <View style = {{
            flexDirection: 'row',
          }}>
            <MorningBanner style = {{
              flex: 1
            }}
            teamName = "전북현대"
            hashTag1 = "승리"
            hashTag2 = "득점"
            hashTag3 = "나이티">
            </MorningBanner>
            <EveningBanner style = {{
              flex: 1
            }}
            teamName = "전북현대"
            hashTag1 = "연휴"
            hashTag2 = "휴가"
            hashTag3 = "나이티"
            navigation =  {navigation} >
            </EveningBanner>
          </View>
          
          <View style = {{
            flexDirection: 'row',
            marginTop:30
          }}>
            <AlignButton style = {{
              flex: 1
            }}
            name = "최신순"></AlignButton>
            <AlignButton style = {{
              flex: 1
            }}
            name = "2023년"></AlignButton>
            <AlignButton style = {{
              flex: 1
            }}
            name = "05월"></AlignButton>
          </View>
        
          <View style = {{
            marginTop: 20,
          }}>
            <PodcastList/>          
          </View>
        </View>
      </View>
      <View style = {{
        flex: 1
        }}>
        <Player navigation = {navigation}>
        </Player>
      </View>
    </View>

    
    
  );
}

export default PodCastScreen;