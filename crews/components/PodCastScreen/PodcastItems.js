import React ,{ useState, useEffect } from "react";
import PlayList from "./PlayList";
import { initialWindowMetrics } from "react-native-safe-area-context";
import { View } from 'react-native';
import { usePodcastData } from "./PodcastContext";
import axios from 'axios';

const items = [
    {
        "id": 1,
        "time": "2023.05.22", 
        "hashTag": "#승리 #연승 #패배",
        "url": "https://designband.com/wp-content/uploads/2012/10/Thinking-Out-Loud-D.mp3",
        "duration": 402,
        "infoSpan": "day"
    },
    {
        "id": 2,
        "time": "2023.05.22", 
        "hashTag": "#승리 #연승 #패배",
        "url": "https://designband.com/wp-content/uploads/2012/10/Uptown-Funk-D.mp3",
        "duration": 387,
        "infoSpan": "night"
    },
    {
        "id": 3,
        "time": "2023.05.23", 
        "hashTag": "#승리 #연승 #패배",
        "url": "https://designband.com/wp-content/uploads/2017/07/Love-On-The-Brain-Ash.mp3",
        "duration": 512,
        "infoSpan": "day"
    },
    {
        "id": 4,
        "time": "2023.05.23", 
        "hashTag": "#승리 #연승 #패배",
        "url": "https://designband.com/wp-content/uploads/2012/10/Thinking-Out-Loud-D.mp3",
        "duration": 399,
        "infoSpan": "night"
    },
    {
        "id": 5,
        "time": "2023.04.22", 
        "hashTag": "#승리 #연승 #패배",
        "url": "https://designband.com/wp-content/uploads/2012/10/Thinking-Out-Loud-D.mp3",
        "duration": 400,
        "infoSpan": "day"
    },
    {
        "id": 6,
        "time": "2023.04.22", 
        "hashTag": "#승리 #연승 #패배",
        "url": "https://designband.com/wp-content/uploads/2012/10/Thinking-Out-Loud-D.mp3",
        "duration": 432,
        "infoSpan": "night"
    },
    {
        "id": 7,
        "time": "2023.9.10", 
        "hashTag": "#승리 #연승 #패배",
        "url": "https://designband.com/wp-content/uploads/2012/10/Thinking-Out-Loud-D.mp3",
        "duration": 412,
        "infoSpan": "day"
    },
    {
        "id": 8,
        "time": "2023.9.10", 
        "hashTag": "#승리 #연승 #패배",
        "url": "https://designband.com/wp-content/uploads/2012/10/Thinking-Out-Loud-D.mp3",
        "duration": 315,
        "infoSpan": "night"
    },
    {
        "id": 9,
        "time": "2023.10.22", 
        "hashTag": "#승리 #연승 #패배",
        "url": "https://designband.com/wp-content/uploads/2012/10/Thinking-Out-Loud-D.mp3",
        "duration": 410,
        "infoSpan": "day"
    },
    {
        "id": 10,
        "time": "2023.10.22", 
        "hashTag": "#승리 #연승 #패배",
        "url": "https://designband.com/wp-content/uploads/2012/10/Thinking-Out-Loud-D.mp3",
        "duration": 378,
        "infoSpan": "night"
    }
]

const PodcastList = (props) => {

    const {podcastData, setPodcastData} = usePodcastData();
    const [teamId, setTeamId] = useState(6908);
    const [podcastListData, setPodcastListData] = useState([]);

    useEffect(() => {
        const getPodcastList = async() => {
            try {
                const responsePodcastData = await axios.get(`https://crews.jongmin.xyz/podcast/list?teamId=${teamId}`);
    
                    // 성공적인 응답 처리
                    console.log(responsePodcastData.data);
                    setPodcastListData(responsePodcastData.data);
                    const addTimeList = podcastListData.map(item=>({
                        ...item, time: madeAtToTime(item.madeAt)
                    }))
                    setPodcastListData(addTimeList);
                    console.log("Podcastlist: 성공");

            } catch (error) {
                // Axios 오류 처리
                console.error(error);
            }
        };

    
        getPodcastList();

    }, []);

    const madeAtToTime = (madeAt) => {
        const date = new Date(madeAt);
        var day = "";
        const localeDate = date.toLocaleDateString();

        switch(date.getUTCDay()){
            case 0:
                day = '(일)'; break;
            case 1:
                day = '(월)'; break;
            case 2:
                day = '(화)'; break;
            case 3:
                day = '(수)'; break;
            case 4:
                day = '(목)'; break;
            case 5:
                day = '(금)'; break;
            case 6:
                day = '(토)'; break;
        }
        
        

        return String(localeDate + " " + day);

        //return madeAt.substring(0, 10).replace(/-/gi, ".");
    }


    return(
        <View>
            {podcastListData.map(item => (
                <PlayList
                    id = {String(item.id).padStart(2, "0")}
                    key = {item.key}
                    time = {item.time}
                    hashTag = "#승리 #연승 #패배"
                    onPress = {()=> {setPodcastData(item)}}
                />
            ))}
            
        </View>
    )
}

export default PodcastList;