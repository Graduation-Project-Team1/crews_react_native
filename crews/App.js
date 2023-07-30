import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import AnalysisScreen from './screens/AnalysisScreen';
import HomeScreen from './screens/HomeScreen';
import NewsScreen from './screens/NewsScreen';
import PodCastScreen from './screens/PodCastScreen';
import TeamScreen from './screens/TeamScreen';
import { Ionicons } from '@expo/vector-icons';
import CustomTabButton from './components/common/CustomTabButton';
import colors from './styles/colors';

const BottomTab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <BottomTab.Navigator>
        <BottomTab.Screen 
          name={'Home'} 
          component={HomeScreen}
          options={{
            tabBarButton: CustomTabButton,
            tabBarActiveTintColor: colors.Green,
            headerShown: false, 
            tabBarIcon: () => <Ionicons name='home-outline' size={20}/>}}/>
        <BottomTab.Screen 
          name={'News'} 
          component={NewsScreen}
          options={{
            tabBarButton: CustomTabButton,
            tabBarActiveTintColor: colors.Green,
            headerShown: false, 
            tabBarIcon: () => <Ionicons name='newspaper-outline' size={20}/>}}/>
        <BottomTab.Screen 
          name={'PodCast'} 
          component={PodCastScreen}
          options={{
            tabBarButton: CustomTabButton,
            tabBarActiveTintColor: colors.Green,
            headerShown: false, 
            tabBarIcon: () => <Ionicons name='radio-outline' size={20}/>}}/>
        <BottomTab.Screen 
          name={'Analysis'} 
          component={AnalysisScreen}
          options={{
            tabBarButton: CustomTabButton,
            tabBarActiveTintColor: colors.Green,
            headerShown: false, 
            tabBarIcon: () => <Ionicons name='stats-chart-outline' size={20}/>}}/>
        <BottomTab.Screen 
          name={'Team'} 
          component={TeamScreen}
          options={{
            tabBarButton: CustomTabButton,
            tabBarActiveTintColor: colors.Green,
            headerShown: false, 
            tabBarIcon: () => <Ionicons name='earth-outline' size={20}/>}}/>
      </BottomTab.Navigator>
    </NavigationContainer>
  );
}
