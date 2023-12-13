import React,{useContext} from "react"
import { Text, View } from "react-native"
import { highestBoxStyle } from "../../../styles/analysisScreen/teamStatsScreen/highestRecordBox";
import { ThemeContext } from "styled-components/native";
const HighestRecordBox = ({ data }) => {
    const theme = useContext(ThemeContext);
    return(
    <View>
        <Text style={[highestBoxStyle.layout,{color:theme.text}]}>
            최고·최다 기록
        </Text>
        <View style={{flexDirection:'row', marginLeft:20}}>
            <View>
                <Text style={{fontWeight:'bold',marginTop:10,color:theme.text}}>최고 이적료 영입</Text>
                <Text style={{fontWeight:'bold',marginTop:10,color:theme.text}}>최고 이적료 방출</Text>
                <Text style={{fontWeight:'bold',marginTop:10,color:theme.text}}>최다 출장</Text>
                <Text style={{fontWeight:'bold',marginTop:10,color:theme.text}}>최다 득점</Text>
            </View>
            <View style={{marginLeft:20}}>
                <Text style={{marginTop:10,color:theme.text}}>{data.topExpensiveSign}</Text>
                <Text style={{marginTop:13,color:theme.text}}>{data.topExpensiveFree}</Text>
                <Text style={{marginTop:13,color:theme.text}}>{data.topAppearances}</Text>
                <Text style={{marginTop:13,color:theme.text}}>{data.topGoals}</Text>
            </View>
        </View>
    </View>
    );
};

export default HighestRecordBox;
