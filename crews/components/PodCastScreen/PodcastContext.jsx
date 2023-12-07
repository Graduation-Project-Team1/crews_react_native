import React,{createContext, useContext, useState} from 'react';

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


