import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import PodCastScreen from './PodCastScreen';
import PodcastPlayer from './PodcastPlayer';
import OnboardingScreen from '../onboarding/OnboardingScreen';

import { PodcastDataProvider } from '../../components/PodCastScreen/PodcastContext';


const Stack = createStackNavigator();

export default function PodcastIndex({navigation}) {
    return (
        <PodcastDataProvider>
            <Stack.Navigator initialRouteName='PodCastScreen'>
                <Stack.Screen
                    options={{ headerShown: false }}
                    name="PodCastScreen"
                    component={PodCastScreen}
                />
            <Stack.Screen name='PodcastPlayer' component={PodcastPlayer} options={{ headerShown: false }}/>

            </Stack.Navigator>
        </PodcastDataProvider>
    );
}