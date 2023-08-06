import react from "react"
import { View, Text } from "react-native"
import { highestContentStyle } from "../../../styles/analysisScreen/teamStatsScreen/highestRecordContent";

const HighestRecordContent = () => {
    return(
        <View style={highestContentStyle.layout}>
            <Text style={highestContentStyle.textBold}>
            최고 이적료 영입 {"\n"}
            최고 이적료 방출 {"\n"}
            최다 출장 {"\n"}
            최다 득점
            </Text>
            <Text>
            송민규 (2021, 포항 스틸러스, 약 20억원){"\n"}
            로페즈 (2020, 상하이 상감, 약 74억원){"\n"}
            이동국 (454 경기){"\n"}
            이동국 (209 경기)
            </Text>
        </View>
    );
};
export default HighestRecordContent;