import React from 'react';
import { View, Text, StyleSheet,ScrollView,StatusBar,Image} from 'react-native';
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
        <Text style={coachScreenstyles.textInfo}>
          허병길 {"\n"}
          대표이사 및 단장 {"\n"}
          대한민국
        </Text>
      </View>
    </View>
    
    <View style={coachScreenstyles.layout}>
      <Text style={coachScreenstyles.textNumber}>
          2
      </Text>
      <Image style={coachScreenstyles.imageInput} source={require('../../assets/analysis/coachPhoto/Park-Ji-Sung.png')} />
      <View style={coachScreenstyles.textLayout}>
        <Text style={coachScreenstyles.textInfo}>
          박지성 {"\n"}
          테크니컬 디렉터 {"\n"}
          대한민국
        </Text>
      </View>
    </View>
    
    <View style={coachScreenstyles.layout}>
      <Text style={coachScreenstyles.textNumber}>
          3
      </Text>
      <Image style={coachScreenstyles.imageInput} source={require('../../assets/analysis/coachPhoto/Kim-Do-Heon.png')} />
      <View style={coachScreenstyles.textLayout}>
        <Text style={coachScreenstyles.textInfo}>
          김두현 {"\n"}
          감독 대행 {"\n"}
          대한민국
        </Text>
      </View>
    </View>

    <View style={coachScreenstyles.layout}>
      <Text style={coachScreenstyles.textNumber}>
          4
      </Text>
      <Image style={coachScreenstyles.imageInput} source={require('../../assets/analysis/coachPhoto/Park-Won-Jae.png')} />
      <View style={coachScreenstyles.textLayout}>
        <Text style={coachScreenstyles.textInfo}>
          박원재 {"\n"}
          코치 {"\n"}
          대한민국
        </Text>
      </View>
    </View>

    <View style={coachScreenstyles.layout}>
      <Text style={coachScreenstyles.textNumber}>
          5
      </Text>
      <Image style={coachScreenstyles.imageInput} source={require('../../assets/analysis/coachPhoto/Lee-Woon-Jae.png')} />
      <View style={coachScreenstyles.textLayout}>
        <Text style={coachScreenstyles.textInfo}>
          이운재 {"\n"}
          골키퍼 코치 {"\n"}
          대한민국
        </Text>
      </View>
    </View>

    <View style={coachScreenstyles.layout}>
      <Text style={coachScreenstyles.textNumber}>
          6
      </Text>
      <Image style={coachScreenstyles.imageInput} source={require('../../assets/analysis/coachPhoto/Lee-Se-Joon.png')} />
      <View style={coachScreenstyles.textLayout}>
        <Text style={coachScreenstyles.textInfo}>
          이세준 {"\n"}
          피지컬 코치 {"\n"}
          대한민국
        </Text>
      </View>
    </View>
  </View>  
  );
};

export default CoachInfoScreen;
