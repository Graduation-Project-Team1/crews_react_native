import React from "react";
import { Text, View, TouchableOpacity } from "react-native";
import { AntDesign } from "@expo/vector-icons";

import { headerStyles } from "../../styles/settingScreen/styles";

const CateHeader = (props) => {
    return (
        <View style = {headerStyles.view}>
            <TouchableOpacity 
            onPress={props.onPress}
            style = {headerStyles.backBtn}>
                <AntDesign 
                name="left" 
                size={17} 
                color="black"/>
            </TouchableOpacity>
            <Text style = {headerStyles.title}>{props.title}</Text>
        </View>
    )
}

export default CateHeader;