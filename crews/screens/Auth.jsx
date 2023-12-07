import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import Main from './home/Main';
import SearchScreen from './search/SearchScreen';
import SettingIndex from './setting/SettingIndex';
import PodcastPlayer from './podcast/PodcastPlayer';


const Stack = createNativeStackNavigator();

const Auth = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
      screenOptions={{headerShown: false}}>
        <Stack.Screen name='Home' component={Main} />
        <Stack.Screen name='Search' component={SearchScreen}/>
        <Stack.Screen name='SettingIndex' component={SettingIndex}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Auth;
