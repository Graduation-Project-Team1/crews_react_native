import React from "react";
import {View,Text} from "react-native";
import { historicBoxStyle } from "../../../styles/analysisScreen/teamStatsScreen/historicRecordBox";
const HistoricalRecordBox = ({ data }) => {
    return (
    <View>
        <Text style={{marginTop: 30,marginLeft:10,fontWeight:'bold'}}>
            역대 우승 기록
        </Text>
        <View style={{flexDirection:'row',justifyContent:'space-around'}}>
            <View>
                <Text style={{fontWeight:'bold',marginTop:10}}>K리그</Text>
                <Text style={{fontWeight:'bold',marginTop:10}}>FA컵</Text>
                <Text style={{fontWeight:'bold',marginTop:10}}>슈퍼컵</Text>
                <Text style={{fontWeight:'bold',marginTop:10}}>AFC</Text>
            </View>
            <View>
                <Text style={{marginTop:10}}>{data.kLeagueWinRecord + " "}</Text>
                <Text style={{marginTop:10}}>{data.faCupWinRecord + " "}</Text>
                <Text style={{marginTop:10}}>{data.superCupWinRecord + " "}</Text>
                <Text style={{marginTop:10}}>{data.afcWinRecord + " "}</Text>
            </View>
        </View>
    </View>
    );
};
export default HistoricalRecordBox;
    