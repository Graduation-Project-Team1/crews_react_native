import React from "react";
import {View,Text} from "react-native";
import { historicBoxStyle } from "../../../styles/analysisScreen/teamStatsScreen/historicRecordBox";
const HistoricalRecordBox = () =>{
    return(
    <View style={{ marginTop: 12 }}>
        <Text style={historicBoxStyle.textLayout}>
            역대 기록
        </Text>
    </View>
    );
};

export default HistoricalRecordBox;
    