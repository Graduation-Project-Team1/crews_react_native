import { Text,View,Image } from "react-native";
import { todayScheduleBoxStyle } from "../../styles/analysisScreen/todayScheduleBox";
import Icon from "react-native-vector-icons/Ionicons";
const ExceptIcon = () => {
    return(
    <View style={[todayScheduleBoxStyle.layout,{marginTop:10}]}>
        <Text style={[todayScheduleBoxStyle.liveTextBox]}>LIVE</Text>
        <View style={[todayScheduleBoxStyle.liveBox]}>
            <Text style={{fontWeight:'bold',fontSize:20,marginTop:10}}>전북현대 vs FC서울{"\n"}1:0</Text>
            <View style={{flexDirection:'row',marginTop:10}}>
                <Image style={todayScheduleBoxStyle.sizeImage} source={require('../../assets/analysis/jeonBukIcon.jpg')} />
                <Image style={todayScheduleBoxStyle.sizeImage} source={require('../../assets/analysis/seoulIcon.png')} />
            </View>
        </View> 

        
    
    </View>   
    );
};

export default ExceptIcon;