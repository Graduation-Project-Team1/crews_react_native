import { Text } from "react-native";
import { currentBoxStyle } from "../../../styles/analysisScreen/teamStatsScreen/currentSeasonBox";

const CurrentSeasonBox = () => {
    return(
        <Text style={currentBoxStyle.layout}>
          현재 시즌{"\n"}
          2022-2023
        </Text>
    );
};

export default CurrentSeasonBox;