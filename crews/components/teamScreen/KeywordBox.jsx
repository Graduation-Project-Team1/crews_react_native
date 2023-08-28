import React from "react";
import { Text, View, StyleSheet, ScrollView,Image } from "react-native";
import { keywordBoxStyle } from "../../styles/teamScreen/keywordBox";

const KeywordBox = () =>{
    return(
        <View style={keywordBoxStyle.layout}>
            <View style={keywordBoxStyle.box}>
                <Image style={keywordBoxStyle.icon} source={require('../../assets/team/swap-vert-icon.png')} />
                <Text style={keywordBoxStyle.boldText}>트렌드 순위</Text>
                <Text style={keywordBoxStyle.text}>1위 (3위 상승)</Text>
            </View>
            <View style={keywordBoxStyle.box}>
                <Image style={keywordBoxStyle.icon} source={require('../../assets/team/graph-icon.png')} />
                <Text style={keywordBoxStyle.boldText}>언급량</Text>
                <Text style={keywordBoxStyle.text}>153회</Text>
            </View>
            <View style={keywordBoxStyle.box}>
                <Image style={keywordBoxStyle.icon} source={require('../../assets/team/good-bad-icon.png')} />
                <Text style={keywordBoxStyle.boldText}>여론 분위기</Text>
                <Text style={keywordBoxStyle.text}>긍정적</Text>
            </View>
        </View>
    );
};

export default KeywordBox;