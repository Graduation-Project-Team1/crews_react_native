import React,{createContext, useContext, useState, useReducer} from 'react';
import { Audio } from 'expo-av';

const podcastConText = createContext();

export function usePodcastData() {
  return useContext(podcastConText);
}

export function PodcastDataProvider({children}){
  const [podcastData, setPodcastData] = useState(null);

  const onClickPodcast = (podcast) => {
    setPodcastData(podcast);
  };

  return (
    <podcastConText.Provider value = {{ podcastData, setPodcastData, onClickPodcast }}>
      {children}
    </podcastConText.Provider>
  );
}





    