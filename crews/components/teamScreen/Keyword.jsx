import React from "react";
import { Text, View, StyleSheet, ScrollView,Image } from "react-native";
import KeywordBar from "./KeywordBar";
import KeywordName from "./KeywordName";
import KeywordBox from "./KeywordBox";
import PositiveContent from "./PositiveContent";
import NegativeContent from "./NegativeContent";

const Keyword = () =>{
    return (
        <View>
            <Text style={{fontWeight:'900', marginLeft:10,marginTop:60,fontSize:18}}>팀 트렌드 분석</Text>
            <KeywordBar/>
            <View style={{ height: 1,backgroundColor: '#CAC4D0'}}/>
            <KeywordName/>
            <KeywordBox/>
            <PositiveContent/>
            <NegativeContent/>
        </View>
    );
};

export default Keyword;