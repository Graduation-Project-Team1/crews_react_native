import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { PodcastDataProvider } from '../components/PodCastScreen/PodcastContext';
import { SoundDataProvider } from '../components/PodCastScreen/SoundContext';

import Main from './home/Main';
import SearchScreen from './search/SearchScreen';
import SettingIndex from './setting/SettingIndex';
import PodcastPlayer from './podcast/PodcastPlayer';



const Stack = createNativeStackNavigator();

const Auth = () => {
  return (

    <PodcastDataProvider>
      <SoundDataProvider>
        <NavigationContainer
        independent={true}
        >
          <Stack.Navigator
          screenOptions={{headerShown: false}}>
            <Stack.Screen name='Home' component={Main} />
            <Stack.Screen name='Search' component={SearchScreen}/>
            <Stack.Screen name='SettingIndex' component={SettingIndex}/>
            <Stack.Screen name='PodcastPlayer' component={PodcastPlayer} options={{ headerShown: false }}/>
          </Stack.Navigator>
        </NavigationContainer>
      </SoundDataProvider>
    </PodcastDataProvider>

  );
};

export default Auth;
