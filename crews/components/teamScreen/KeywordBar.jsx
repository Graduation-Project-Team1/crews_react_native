import React from "react";
import { Text, View, StyleSheet, ScrollView,Image } from "react-native";
import { keywordBarStyle } from "../../styles/teamScreen/keywordBar";


const KeywordBar = () => {
    return(
    <View style={{flexDirection:'row'}}>
        <View>
            <Text style={keywordBarStyle.firstText}>1</Text>
            <View style={keywordBarStyle.firstBar}/>
        </View>
        <View>
            <Text style={keywordBarStyle.secondText}>2</Text>
            <View style={keywordBarStyle.secondBar}/>
        </View>
        <View>
            <Text style={keywordBarStyle.thirdText}>3</Text>
            <View style={keywordBarStyle.thirdBar}/>
        </View>
        <View>
            <Text style={keywordBarStyle.fourthText}>4</Text>
            <View style={keywordBarStyle.fourthBar}/>
        </View>
        <View>
            <Text style={keywordBarStyle.fifthText}>5</Text>
            <View style={keywordBarStyle.fifthBar}/>
        </View>
    </View>
    );
};


export default KeywordBar;