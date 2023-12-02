import React from 'react';
import { View, Text,Image} from 'react-native';
import Icon from "react-native-vector-icons/Ionicons";
import { coachScreenstyles } from '../../styles/analysisScreen/coachInfoScreen/coachScreen';
//{/*중간에 잘리는 이유는 부모 컴포넌트의 크기를 안정해줬기 때문에 최상위 view에 flex :1이라 했다*/}
const CoachInfoScreen = () => {
  return (
  <View>
    <View style={coachScreenstyles.layout}>
      <Text style={coachScreenstyles.textNumber}>
          1
      </Text>
      <Image style={coachScreenstyles.imageInput} source={require('../../assets/analysis/coachPhoto/Heo-Byung-Gil.png')} />
      <View style={coachScreenstyles.textLayout}>
        <View style={{marginTop:7,flex:1}}>
          <Text style={coachScreenstyles.title}>허병길</Text>
          <View style={{flexDirection:'row',marginTop:5}}>
            <Icon name="person-circle-outline" size={15} style={coachScreenstyles.timeIcon}/>
            <Text style={{fontWeight:'bold'}}>대표이사 및 단장</Text>
            <Icon name="globe-outline" size={15} style={coachScreenstyles.viewIcon}/>
            <Text style={{fontWeight:'bold'}}>대한민국</Text>
          </View>
        </View>
      </View>
    </View>

    <View style={coachScreenstyles.layout}>
      <Text style={coachScreenstyles.textNumber}>
          2
      </Text>
      <Image style={coachScreenstyles.imageInput} source={require('../../assets/analysis/coachPhoto/Park-Ji-Sung.png')} />
      <View style={coachScreenstyles.textLayout}>
        <View style={{marginTop:7,flex:1}}>
          <Text style={coachScreenstyles.title}>박지성</Text>
          <View style={{flexDirection:'row',marginTop:5}}>
            <Icon name="person-circle-outline" size={15} style={coachScreenstyles.timeIcon}/>
            <Text style={{fontWeight:'bold'}}>테크니컬 디렉터</Text>
            <Icon name="globe-outline" size={15} style={coachScreenstyles.viewIcon}/>
            <Text style={{fontWeight:'bold'}}>대한민국</Text>
          </View>
        </View>
      </View>
    </View>
    
    <View style={coachScreenstyles.layout}>
      <Text style={coachScreenstyles.textNumber}>
          3
      </Text>
      <Image style={coachScreenstyles.imageInput} source={require('../../assets/analysis/coachPhoto/Kim-Do-Heon.png')} />
      <View style={coachScreenstyles.textLayout}>
        <View style={{marginTop:7,flex:1}}>
          <Text style={coachScreenstyles.title}>김두현</Text>
          <View style={{flexDirection:'row',marginTop:5}}>
            <Icon name="person-circle-outline" size={15} style={coachScreenstyles.timeIcon}/>
            <Text style={{fontWeight:'bold'}}>감독 대행</Text>
            <Icon name="globe-outline" size={15} style={coachScreenstyles.viewIcon}/>
            <Text style={{fontWeight:'bold'}}>대한민국</Text>
          </View>
        </View>
      </View>
    </View>

    <View style={coachScreenstyles.layout}>
      <Text style={coachScreenstyles.textNumber}>
          4
      </Text>
      <Image style={coachScreenstyles.imageInput} source={require('../../assets/analysis/coachPhoto/Park-Won-Jae.png')} />
      <View style={coachScreenstyles.textLayout}>
        <View style={{marginTop:7,flex:1}}>
          <Text style={coachScreenstyles.title}>박원재</Text>
          <View style={{flexDirection:'row',marginTop:5}}>
            <Icon name="person-circle-outline" size={15} style={coachScreenstyles.timeIcon}/>
            <Text style={{fontWeight:'bold'}}>코치</Text>
            <Icon name="globe-outline" size={15} style={coachScreenstyles.viewIcon}/>
            <Text style={{fontWeight:'bold'}}>대한민국</Text>
          </View>
        </View>
      </View>
    </View>

    <View style={coachScreenstyles.layout}>
      <Text style={coachScreenstyles.textNumber}>
          5
      </Text>
      <Image style={coachScreenstyles.imageInput} source={require('../../assets/analysis/coachPhoto/Lee-Woon-Jae.png')} />
      <View style={coachScreenstyles.textLayout}>
        <View style={{marginTop:7,flex:1}}>
          <Text style={coachScreenstyles.title}>이운재</Text>
          <View style={{flexDirection:'row',marginTop:5}}>
            <Icon name="person-circle-outline" size={15} style={coachScreenstyles.timeIcon}/>
            <Text style={{fontWeight:'bold'}}>골키퍼 코치</Text>
            <Icon name="globe-outline" size={15} style={coachScreenstyles.viewIcon}/>
            <Text style={{fontWeight:'bold'}}>대한민국</Text>
          </View>
        </View>
      </View>
    </View>

    <View style={coachScreenstyles.layout}>
      <Text style={coachScreenstyles.textNumber}>
          6
      </Text>
      <Image style={coachScreenstyles.imageInput} source={require('../../assets/analysis/coachPhoto/Lee-Se-Joon.png')} />
      <View style={coachScreenstyles.textLayout}>
        <View style={{marginTop:7,flex:1}}>
          <Text style={coachScreenstyles.title}>이세준</Text>
          <View style={{flexDirection:'row',marginTop:5}}>
            <Icon name="person-circle-outline" size={15} style={coachScreenstyles.timeIcon}/>
            <Text style={{fontWeight:'bold'}}>피지컬 코치</Text>
            <Icon name="globe-outline" size={15} style={coachScreenstyles.viewIcon}/>
            <Text style={{fontWeight:'bold'}}>대한민국</Text>
          </View>
        </View>
      </View>
    </View>
  </View>  
  );
};

export default CoachInfoScreen;
