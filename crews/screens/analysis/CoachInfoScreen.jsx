import React, { useState, useEffect,useContext }  from 'react';
import { View, Text,Image} from 'react-native';
import axios from 'axios';
import Icon from "react-native-vector-icons/Ionicons";
import { coachScreenstyles } from '../../styles/analysisScreen/coachInfoScreen/coachScreen';
import { ThemeContext } from "styled-components/native";
//{/*중간에 잘리는 이유는 부모 컴포넌트의 크기를 안정해줬기 때문에 최상위 view에 flex :1이라 했다*/}
const CoachInfoScreen = () => {
  const theme = useContext(ThemeContext);
  const [coaches, setCoaches] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("https://crews.jongmin.xyz/data/record/coach/6908");  // 실제로는 api 엔드포인트 바뀔 예정
        setCoaches(response.data);
      } catch (error) {
        console.error('데이터를 가져오는 중 오류 발생:', error);
      }
    };

    fetchData();
  }, []);
  
  
  
  return (
    <View>
      {coaches.map((coach, index) => (
        <View key={index} style={coachScreenstyles.layout}>
          <Text style={[coachScreenstyles.textNumber,{color:theme.text}]}>{index + 1}</Text>
          <Image style={coachScreenstyles.imageInput} source={{ uri: coach.img }} />
          <View style={coachScreenstyles.textLayout}>
            <View style={{marginTop:7,flex:1}}>
              <Text style={[coachScreenstyles.title,{color:theme.text}]}>{coach.name}</Text>
              <View style={{flexDirection:'row',marginTop:5}}>
                <Icon name="person-circle-outline" size={15} style={[coachScreenstyles.timeIcon,{color:theme.primary}]}/>
                <Text style={[{fontWeight:'bold'},{color:theme.text}]}>{coach.roles}</Text>
                <Icon name="globe-outline" size={15} style={[coachScreenstyles.viewIcon,{color:theme.primary}]}/>
                <Text style={[{fontWeight:'bold'},{color:theme.text}]}>{coach.region}</Text>
              </View>
            </View>
          </View>
        </View>
      ))}
    </View>
  );
  
};

export default CoachInfoScreen;
