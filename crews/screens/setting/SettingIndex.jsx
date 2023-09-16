import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import SettingScreen from './SettingScreen';
import AccountSettingScreen from './AccountSettingScreen';
import OnboardingScreen from '../onboarding/OnboardingScreen';

const Stack = createStackNavigator();

export default function SettingIndex({navigation}) {
    return (
        <Stack.Navigator initialRouteName='SettingScreen'>
            <Stack.Screen
                options={{ headerShown: false }}
                name="SettingScreen"
                component={SettingScreen}
            />
            <Stack.Screen
                options = {{ headerShown: false}}
                name= "ProfileSettingScreen"
                component={OnboardingScreen}
            />
            <Stack.Screen
                options={{ headerShown: false }}
                name="AccountSettingScreen"
                component={AccountSettingScreen}
            />
        </Stack.Navigator>
    );
}