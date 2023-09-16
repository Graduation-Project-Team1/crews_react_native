import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Home from './Home';
import SearchScreen from '../../screens/search/SearchScreen';
import SettingIndex from '../../screens/setting/SettingIndex';

const Stack = createNativeStackNavigator();

const Auth = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
      screenOptions={{headerShown: false}}>
        <Stack.Screen name='Home' component={Home} />
        <Stack.Screen name='Search' component={SearchScreen}/>
        <Stack.Screen name='SettingIndex' component={SettingIndex}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Auth;
