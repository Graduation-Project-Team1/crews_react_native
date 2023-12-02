import React from "react";
import PlayList from "./PlayList";
import { initialWindowMetrics } from "react-native-safe-area-context";
import { View } from 'react-native';

const items = [
    {
        key: 1,
        title: "2023.05.22 (월)", 
        time: "#승리 #연승 #패배"
    },
    {
        key: 2,
        title: "2023.05.22 (월)", 
        time: "#승리 #연승 #패배"
    },
    {
        key: 3,
        title: "2023.05.22 (월)", 
        time: "#승리 #연승 #패배"
    },
    {
        key: 4,
        title: "2023.05.22 (월)", 
        time: "#승리 #연승 #패배"
    },
    {
        key: 5,
        title: "2023.05.22 (월)", 
        time: "#승리 #연승 #패배"
    },
    {
        key: 6,
        title: "2023.05.22 (월)", 
        time: "#승리 #연승 #패배"
    },
    {
        key: 7,
        title: "2023.05.22 (월)", 
        time: "#승리 #연승 #패배"
    },
    {
        key: 8,
        title: "2023.05.22 (월)", 
        time: "#승리 #연승 #패배"
    },
    {
        key: 9,
        title: "2023.05.22 (월)", 
        time: "#승리 #연승 #패배"
    },
    {
        key: 10,
        title: "2023.05.22 (월)", 
        time: "#승리 #연승 #패배"
    }
];

const PodcastList = ({navigation}) => {
    const _onPress = item => {
        navigation.navigate('PodcastPlayer')
    };

    return(
        <View>
            {items.map(item => (
                <PlayList
                    id = {item.key}
                    title = {item.title}
                    time = {item.time}
                />
            ))}
            
        </View>
    )
}

export default PodcastList;