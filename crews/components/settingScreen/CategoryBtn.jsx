import React from "react";
import { Text, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { AntDesign } from '@expo/vector-icons'; 

const CategoryBtn = ( props ) => {
    return(
        <TouchableOpacity 
        onPress={props.onPress}
        style = {{
            height: 50,
            padding: 15,
            marginTop: 5,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between'
        }}>
            <Text style = {{fontSize: 15}}>{props.title}</Text>
            <AntDesign 
                name="right" 
                size={17} 
                color="black"/>
        </TouchableOpacity>
    )
}

export default CategoryBtn;

