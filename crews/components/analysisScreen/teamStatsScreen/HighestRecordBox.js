import react from "react"
import { Text } from "react-native"
import { highestBoxStyle } from "../../../styles/analysisScreen/teamStatsScreen/highestRecordBox";
const HighestRecordBox = () =>{
    return(
    <Text style={highestBoxStyle.layout}>
        최고 · 최다
    </Text>
    );
};
export default HighestRecordBox;