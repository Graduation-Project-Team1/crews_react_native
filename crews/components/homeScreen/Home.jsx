import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import HomeScreen from '../../screens/home/HomeScreen';
import NewsScreen from '../../screens/news/NewsScreen';
import AnalysisScreen from '../../screens/analysis/AnalysisScreen';
import TeamScreen from '../../screens/team/TeamScreen';
import CustomTabButton from '../common/CustomTabButton';
import colors from '../../styles/colors';
import PodcastIndex from '../../screens/podcast/PodcastIndex';

const Tab = createBottomTabNavigator();

const Home = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarButton: CustomTabButton,
        tabBarActiveTintColor: colors.Green,
        headerShown: false,
        tabBarIcon: ({ color, size }) => {
          let iconName;

          if (route.name === 'HomeScreen') {
            iconName = 'home-outline';
          } else if (route.name === 'News') {
            iconName = 'newspaper-outline';
          } else if (route.name === 'PodCast') {
            iconName = 'radio-outline';
          } else if (route.name === 'Analysis') {
            iconName = 'stats-chart-outline';
          } else if (route.name === 'Team') {
            iconName = 'earth-outline';
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
    >
      <Tab.Screen name="HomeScreen" component={HomeScreen} />
      <Tab.Screen name="News" component={NewsScreen} />
      <Tab.Screen name="PodCast" component={PodcastIndex} />
      <Tab.Screen name="Analysis" component={AnalysisScreen} />
      <Tab.Screen name="Team" component={TeamScreen} />
    </Tab.Navigator>
  );
}

export default Home;