import React, { useContext } from "react";
import { Text, View, TouchableOpacity } from "react-native";
import { AntDesign } from '@expo/vector-icons'; 
import { ThemeContext } from "styled-components";

const CategoryBtn = ( props ) => {
    const theme = useContext(ThemeContext);
    return(
        <TouchableOpacity 
        onPress={props.onPress}
        style = {{
            height: 55,
            padding: 15,
            
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between'
        }}>
            <Text style = {{fontSize: 16, color: theme.text}}>{props.title}</Text>
            <AntDesign 
                name="right" 
                size={17} 
                color={theme.text}/>
        </TouchableOpacity>
    )
}

export default CategoryBtn;

