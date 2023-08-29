import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import PodCastScreen from './PodCastScreen';
import PodcastPlayer from './PodcastPlayer';
import OnboardingScreen from '../onboarding/OnboardingScreen';


const Stack = createStackNavigator();

export default function PodcastIndex({navigation}) {
    return (
        <Stack.Navigator initialRouteName='PodCastScreen'>
            <Stack.Screen
                options={{ headerShown: false }}
                name="PodCastScreen"
                component={PodCastScreen}
            />
            <Stack.Screen
                options={{ headerShown: false }}
                name="PodcastPlayer"
                component={PodcastPlayer}
            />

        </Stack.Navigator>
    );
}