import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import SettingScreen from './SettingScreen';
import AccountSettingScreen from './AccountSettingScreen';
import OnboardingScreen from '../onboarding/OnboardingScreen';
import NotificationSettingScreen from './NotificationSettingScreen';
import AppSettingScreen from './AppSettingScreen';
import ExtraSettingScreen from './ExtraSettingScreen';

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
            <Stack.Screen
                options={{ headerShown: false }}
                name="NotificationSettingScreen"
                component={NotificationSettingScreen}
            />
            <Stack.Screen
                options={{ headerShown: false }}
                name="AppSettingScreen"
                component={AppSettingScreen}
            />
            <Stack.Screen
                options={{ headerShown: false }}
                name="ExtraSettingScreen"
                component={ExtraSettingScreen}
            />
        </Stack.Navigator>
    );
}