import React from "react";
import PlayList from "./PlayList";
import { initialWindowMetrics } from "react-native-safe-area-context";
import { ScrollView } from 'react-native-gesture-handler';

const items = [
    {
        key: 1,
        title: "5월 22번째 날 : 전북현대", 
        time: "2023년 05월 22일 오후 4시"
    },
    {
        key: 2,
        title: "5월 22번째 날 : 전북현대", 
        time: "2023년 05월 22일 오후 4시"
    },
    {
        key: 3,
        title: "5월 22번째 날 : 전북현대", 
        time: "2023년 05월 22일 오후 4시"
    },
    {
        key: 4,
        title: "5월 22번째 날 : 전북현대", 
        time: "2023년 05월 22일 오후 4시"
    },
    {
        key: 5,
        title: "5월 22번째 날 : 전북현대", 
        time: "2023년 05월 22일 오후 4시"
    },
    {
        key: 6,
        title: "5월 22번째 날 : 전북현대", 
        time: "2023년 05월 22일 오후 4시"
    },
    {
        key: 7,
        title: "5월 22번째 날 : 전북현대", 
        time: "2023년 05월 22일 오후 4시"
    },
    {
        key: 8,
        title: "5월 22번째 날 : 전북현대", 
        time: "2023년 05월 22일 오후 4시"
    },
    {
        key: 9,
        title: "5월 22번째 날 : 전북현대", 
        time: "2023년 05월 22일 오후 4시"
    },
    {
        key: 10,
        title: "5월 22번째 날 : 전북현대", 
        time: "2023년 05월 22일 오후 4시"
    }
];

const PodcastList = ({navigation}) => {
    const _onPress = item => {
        navigation.navigate('PodcastPlayer')
    };

    return(
        <ScrollView >
            {items.map(item => (
                <PlayList
                    key = {item.key}
                    title = {item.title}
                    time = {item.time}
                />
            ))}
            
        </ScrollView>
    )
}

export default PodcastList;