import React, { useContext } from "react";
import { Text, View, TouchableOpacity } from "react-native";
import { AntDesign } from "@expo/vector-icons";

import { headerStyles } from "../../styles/settingScreen/styles";
import { ThemeContext } from "styled-components";

const CateHeader = (props) => {
    const theme = useContext(ThemeContext);
    return (
        <View style = {headerStyles.view}>
            <TouchableOpacity 
            onPress={props.onPress}
            style = {headerStyles.backBtn}>
                <AntDesign 
                name="left" 
                size={17} 
                color={theme.text}/>
            </TouchableOpacity>
            <Text style = {[headerStyles.title, {color: theme.text}]}>{props.title}</Text>
        </View>
    )
}

export default CateHeader;