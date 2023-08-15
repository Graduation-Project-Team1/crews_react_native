import React from "react";
import { View, Text } from "react-native";
import { historicContentStyle } from "../../../styles/analysisScreen/teamStatsScreen/historicRecordContent";
const HistoricalRecordContent = () =>{
    return(
        <View style={{ marginTop: 12 }}>
          <Text style={historicContentStyle.teamHistoricalRecordBold}>
            K리그 우승 (9회)
          </Text>
          <Text style={{ paddingLeft: 20 }}>
            2009, 2011, 2014, 2015, 2017, 2019, 2020, 2021
          </Text>
          <Text style={historicContentStyle.teamHistoricalRecordBold}>
            FA컵 우승(5회)
          </Text>
          <Text style={{ paddingLeft: 20 }}>
            2000, 2003, 2005, 2020, 2022
          </Text>
          <Text style={historicContentStyle.teamHistoricalRecordBold}>
            슈퍼컵 우승(1회)
          </Text>
          <Text style={{ paddingLeft: 20 }}>
            2004
          </Text>
          <Text style={historicContentStyle.teamHistoricalRecordBold}>
            AFC 우승(2회)
          </Text>
          <Text style={{ paddingLeft: 20 }}>
            2006, 2016
          </Text>
        </View>
    )
}
export default HistoricalRecordContent;