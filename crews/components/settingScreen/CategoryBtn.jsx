import React from "react";
import { Text, View, TouchableOpacity } from "react-native";
import { AntDesign } from '@expo/vector-icons'; 

const CategoryBtn = ( props ) => {
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
            <Text style = {{fontSize: 16, color: props.color}}>{props.title}</Text>
            <AntDesign 
                name="right" 
                size={17} 
                color="black"/>
        </TouchableOpacity>
    )
}

export default CategoryBtn;

