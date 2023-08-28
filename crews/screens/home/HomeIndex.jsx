import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from './HomeScreen';
import SettingIndex from '../setting/SettingIndex';


const Stack = createStackNavigator();

export default function HomeIndex({navigation}) {
    return (
        <Stack.Navigator initialRouteName='HomeScreen'>
            <Stack.Screen
                options={{ headerShown: false }}
                name="HomeScreen"
                component={HomeScreen}
            />
            <Stack.Screen
                options={{ headerShown: false }}
                name="SettingIndex"
                component={SettingIndex}
            />
        </Stack.Navigator>
    );
}