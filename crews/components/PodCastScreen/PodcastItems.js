import React,{ useState, useEffect, useContext } from "react";
import PlayList from "./PlayList";
import { View } from 'react-native';
import { usePodcastData } from "./PodcastContext";
import axios from 'axios';
import { useSoundData } from "./SoundContext";
import { ThemeContext } from "styled-components";

import { useRecoilValue } from "recoil";
import { userTeamState } from "../../recoil/teamState";

const PodcastList = (props) => {
    const {podcastData, setPodcastData} = usePodcastData();
    //const [teamId, setTeamId] = useState(6908);
    const [podcastListData, setPodcastListData] = useState([]);
    const userTeam = useRecoilValue(userTeamState);

    useEffect(() => {
        const getPodcastList = async() => {
            try {
                const responsePodcastData = await axios.get(`https://crews.jongmin.xyz/podcast/list?teamId=${userTeam.id}`);
    
                    // 성공적인 응답 처리
                    console.log(responsePodcastData.data);
                    const addTimeList = responsePodcastData.data.map(item=>({
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
        <View style={{paddingBottom: 100}}>
            {podcastListData.map(item => (
                <PlayList
                    key = {item.id}
                    id = {String(item.id).padStart(2, "0")}
                    time = {item.time}
                    hashTag = {item.title}
                    onPress = {()=> {setPodcastData(item)}}
                />
            ))}
            
        </View>
    )
}

export default PodcastList;