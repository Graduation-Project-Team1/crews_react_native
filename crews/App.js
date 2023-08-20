import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import HomeScreen from './screens/HomeScreen';
import NewsScreen from './screens/NewsScreen';
import PodCastScreen from './screens/PodCastScreen';
import AnalysisScreen from './screens/AnalysisScreen';
import TeamScreen from './screens/TeamScreen';
import CustomTabButton from './components/common/CustomTabButton';
import colors from './styles/colors';
import Auth from './components/homeScreen/Auth';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <Auth/>
  );
}