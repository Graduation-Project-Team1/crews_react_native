import React, {useContext} from "react";
import { Text, View, StyleSheet, ScrollView,Image } from "react-native";
import { ThemeContext } from "styled-components/native";

const KeywordName = () =>{
    const theme = useContext(ThemeContext);
    return(
        <View style={{flexDirection:"row",justifyContent:'space-around',marginTop:10}}>
            <Text style={{color:theme.text}}>키워드</Text>
            <Text style={{color:theme.text}}>키워드</Text>
            <Text style={{color:theme.text}}>키워드</Text>
            <Text style={{color:theme.text}}>키워드</Text>
            <Text style={{color:theme.text}}>키워드</Text>
        </View>
    );
};

export default KeywordName;