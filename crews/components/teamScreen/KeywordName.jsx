import React, {useContext} from "react";
import { Text, View, StyleSheet, ScrollView,Image } from "react-native";
import { ThemeContext } from "styled-components/native";

const KeywordName = () =>{
    const theme = useContext(ThemeContext);
    return(
        <View style={{flexDirection:"row",justifyContent:'space-around',marginTop:10}}>
            <Text style={{color:theme.text}}>수원</Text>
            <Text style={{color:theme.text}}>울산</Text>
            <Text style={{color:theme.text}}>전북</Text>
            <Text style={{color:theme.text}}>대구</Text>
            <Text style={{color:theme.text}}>제주</Text>
        </View>
    );
};

export default KeywordName;