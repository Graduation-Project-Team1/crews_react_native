import React,{createContext, useContext, useState, useEffect} from 'react';
import { Audio } from 'expo-av';
import { usePodcastData } from './PodcastContext';
import axios from 'axios';

const soundConText = createContext();

export function useSoundData() {
    return useContext(soundConText);
}

export function SoundDataProvider({children}){

    const [sound, setSound] = useState(null);

    const [isPlaying, setIsPlaying] = useState(false);
    const [podcastId, setPodcastId] = useState();
    const [duration, setDuration] = useState();
    const [position, setPosition] = useState(0);
    const [slider, setSlider] = useState();
    const [newPosition, setNewPosition] = useState();

    const {podcastData} = usePodcastData();

    const [url, setUrl] = useState();

    // useEffect(() => {
    //     const getSoundData = async() => {
    //         try {
    //             const responseSoundData = await axios.get(`https://crews.jongmin.xyz/podcast?podcastId=${podcastData.id}`);
    
    //                 // 성공적인 응답 처리
    //                 console.log(responseSoundData);
    //                 setUrl(responseSoundData.data);
    //                 console.log("Podcastlist: 성공");

    //         } catch (error) {
    //             // Axios 오류 처리
    //             console.error(error);
    //         }
    //     };

    
    //     getSoundData();

    // }, [podcastData]);

    const musicStatus = async status => {
        if (!status.isLoaded) {
        if (status.error) {
            console.log(`Error on expo AV: ${status.error}`);
        }
        } else {
        setDuration(status.durationMillis);
        setPosition(status.positionMillis);
        console.log("mp3 총 길이: ", status.durationMillis);
        console.log("mp3 현재 위치: ",status.positionMillis);
        }
    };
    
    async function playSound() {
        console.log('Loading Sound');
        const { sound } = await Audio.Sound.createAsync({uri: `https://crews.jongmin.xyz/podcast?podcastId=${podcastData.id}`},{ shouldPlay: true }, musicStatus);
        setSound(sound);
    }

    const playController = async () => {
        if (!sound) {
        return;
        }
        sound.setPositionAsync(newPosition);
        isPlaying ? await sound.pauseAsync() : await sound.playAsync({position});
    };




    return (
        <soundConText.Provider value = {{ sound, setSound, duration, position, isPlaying, setIsPlaying, playSound, playController }}>
        {children}
        </soundConText.Provider>
    );
}