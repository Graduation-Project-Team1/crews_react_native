import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import HomeScreen from './HomeScreen';
import IssueScreen from '../issue/IssueScreen';
import AnalysisScreen from '../analysis/AnalysisScreen';
import TeamScreen from '../team/TeamScreen';
import colors from '../../styles/colors';
import PodcastIndex from '../podcast/PodcastIndex';

const Tab = createBottomTabNavigator();

const Main = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarActiveTintColor: colors.primary,
        headerShown: false,
        tabBarIcon: ({ color, size }) => {
          let iconName;

          if (route.name === '홈') {
            iconName = 'ios-home-sharp';
          } else if (route.name === '이슈') {
            iconName = 'ios-newspaper-sharp';
          } else if (route.name === '라디오') {
            iconName = 'ios-radio';
          } else if (route.name === '팀') {
            iconName = 'ios-calendar-sharp';
          } else if (route.name === '분석') {
            iconName = 'ios-stats-chart-sharp';
          }

          return <Ionicons name={iconName} size={26} color={color}/>;
        },
        tabBarShowLabel: true,
        tabBarStyle: {
          height: 70,
          paddingBottom: 5,
        },
      })}
    >
      <Tab.Screen name="홈" component={HomeScreen} />
      <Tab.Screen name="이슈" component={IssueScreen} />
      <Tab.Screen name="라디오" component={PodcastIndex} />
      <Tab.Screen name="팀" component={AnalysisScreen} />
      <Tab.Screen name="분석" component={TeamScreen} />
    </Tab.Navigator>
  );
}

export default Main;