import react from "react"
import { Text, View } from "react-native"
import { highestBoxStyle } from "../../../styles/analysisScreen/teamStatsScreen/highestRecordBox";
const HighestRecordBox = () =>{
    return(
    <View>
        <Text style={highestBoxStyle.layout}>
            최고·최다 기록
        </Text>
        <View style={{flexDirection:'row',justifyContent:'space-around'}}>
        <View>
            <Text style={{fontWeight:'bold',marginTop:10}}>최고 이적료 영입</Text>
            <Text style={{fontWeight:'bold',marginTop:10}}>최고 이적료 방출</Text>
            <Text style={{fontWeight:'bold',marginTop:10}}>최다 출장</Text>
            <Text style={{fontWeight:'bold',marginTop:10}}>최다 득점</Text>
        </View>
        <View>
            <Text style={{marginTop:10}}>송민규 (2021, 포항 스틸러스, 약 20억 원)</Text>
            <Text style={{marginTop:10}}>로페즈 (2020, 상하이 상감, 약 74억 원)</Text>
            <Text style={{marginTop:10}}>이동국 (454 경기)</Text>
            <Text style={{marginTop:10}}>이동국 (209 경기)</Text>
        </View>
        </View>
    </View>
    );
};
export default HighestRecordBox;