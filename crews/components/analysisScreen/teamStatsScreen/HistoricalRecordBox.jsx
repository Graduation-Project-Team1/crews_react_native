import React,{useContext} from "react";
import {View,Text} from "react-native";
import { historicBoxStyle } from "../../../styles/analysisScreen/teamStatsScreen/historicRecordBox";
import { ThemeContext } from "styled-components/native";
const HistoricalRecordBox = ({ data }) => {
    const theme = useContext(ThemeContext);
    return (
    <View>
        <Text style={{marginTop: 30,marginLeft:10,fontWeight:'bold',color:theme.text}}>
            역대 우승 기록
        </Text>
        <View style={{flexDirection:'row',justifyContent:'space-around'}}>
            <View>
                <Text style={{fontWeight:'bold',marginTop:10,color:theme.text}}>K리그</Text>
                <Text style={{fontWeight:'bold',marginTop:10,color:theme.text}}>FA컵</Text>
                <Text style={{fontWeight:'bold',marginTop:10,color:theme.text}}>슈퍼컵</Text>
                <Text style={{fontWeight:'bold',marginTop:10,color:theme.text}}>AFC</Text>
            </View>
            <View>
                <Text style={{marginTop:10,color:theme.text}}>{data.kLeagueWinRecord + " "}</Text>
                <Text style={{marginTop:10,color:theme.text}}>{data.faCupWinRecord + " "}</Text>
                <Text style={{marginTop:10,color:theme.text}}>{data.superCupWinRecord + " "}</Text>
                <Text style={{marginTop:10,color:theme.text}}>{data.afcWinRecord + " "}</Text>
            </View>
        </View>
    </View>
    );
};
export default HistoricalRecordBox;
    