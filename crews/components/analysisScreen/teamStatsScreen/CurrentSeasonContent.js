import { View, Text } from "react-native";
import { currentContentStyle } from "../../../styles/analysisScreen/teamStatsScreen/currentSeasonContent";

const CurrentSeasonContent = () => {
    return (
    <View style={currentContentStyle.layout}>
        <Text style={currentContentStyle.textBold}>
            순위 {"\n"}
            결과 {"\n"}
            기록 {"\n"}
            최근
            </Text>
            <Text>
            7위 {"\n"}
            15경기 18승점 5승 3무 7패 {"\n"}
            17득점 14실점 3득실 {"\n"}
            패 승 무 승 무
        </Text>
    </View>
    );
};

export default CurrentSeasonContent;