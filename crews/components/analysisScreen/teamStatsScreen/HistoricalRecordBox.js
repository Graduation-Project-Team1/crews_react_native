import React from "react";
import {View,Text} from "react-native";
import { historicBoxStyle } from "../../../styles/analysisScreen/teamStatsScreen/historicRecordBox";
const HistoricalRecordBox = () =>{
    return(
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
                <Text style={{marginTop:10}}>2009, 2011, 2014, 2015, 2017, 2019, 2020, 2021</Text>
                <Text style={{marginTop:10}}>2000, 2003, 2005, 2020, 2022</Text>
                <Text style={{marginTop:10}}>2004</Text>
                <Text style={{marginTop:10}}>2006, 2016</Text>
            </View>
        </View>
    </View>
    
    );
};

export default HistoricalRecordBox;
    