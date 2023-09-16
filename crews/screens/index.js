import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import AnalysisScreen from './analysis/AnalysisScreen';
import HomeScreen from './home/HomeScreen';
import NewsScreen from './news/NewsScreen';
import PodcastIndex from './podcast/PodcastIndex';
import TeamScreen from './team/TeamScreen';
import { Ionicons } from '@expo/vector-icons';
import CustomTabButton from '../components/common/CustomTabButton';
import colors from '../styles/colors';
import { QueryClient, QueryClientProvider } from 'react-query';


const BottomTab = createBottomTabNavigator();

const Root = ({navigation}) => {
    return (
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
            component={PodcastIndex}
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
    );
}

export default function index () {

    const queryClient = new QueryClient();

    return(
        <QueryClientProvider client={queryClient}>
            <NavigationContainer>
                <Root/>
            </NavigationContainer>
        </QueryClientProvider>
    )
};