import React, {useContext} from "react";
import { Text, View, StyleSheet, ScrollView,Image } from "react-native";
import { keywordBoxStyle } from "../../styles/teamScreen/keywordBox";
import { ThemeContext } from "styled-components/native";

const KeywordBox = ({ rank, mentions, mood }) =>{
    const theme = useContext(ThemeContext);
    return(
        <View style={[keywordBoxStyle.layout,{borderColor:theme.primaryLight}]}>
            <View style={keywordBoxStyle.box}>
                <Image style={[keywordBoxStyle.icon,{tintColor:theme.text} ]} source={require('../../assets/team/swap-vert-icon.png')} />
                <Text style={[keywordBoxStyle.boldText,{color:theme.text}]}>트렌드 순위</Text>
                <Text style={[keywordBoxStyle.text,{color:theme.text}]}>{`${rank}위(3위 상승)`}</Text>
            </View>
            <View style={keywordBoxStyle.box}>
                <Image style={[keywordBoxStyle.icon,{tintColor:theme.text} ]} source={require('../../assets/team/swap-vert-icon.png')} />
                <Text style={[keywordBoxStyle.boldText,{color:theme.text}]}>언급량</Text>
                <Text style={[keywordBoxStyle.text,{color:theme.text}]}>{`${mentions}회`}</Text>
            </View>
            <View style={keywordBoxStyle.box}>
                <Image style={[keywordBoxStyle.icon,{tintColor:theme.text}]} source={require('../../assets/team/good-bad-icon.png')} />
                <Text style={[keywordBoxStyle.boldText,{color:theme.text}]}>여론 분위기</Text>
                <Text style={[keywordBoxStyle.text,{color:theme.text}]}>{mood}</Text>
            </View>
        </View>
    );
};

export default KeywordBox;