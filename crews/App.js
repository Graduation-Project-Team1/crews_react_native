import React, { useEffect, useState } from 'react';
import { RecoilRoot } from 'recoil';
import Base from './screens/Base';
import { getToken } from './api/asyncStorage';
import LoginPage from './screens/login/LoginPage';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import KakaoLogin from './screens/login/KakaoLogin';
import OnboardingScreen from './screens/onboarding/OnboardingScreen';


export default function App() {
  const [isLogin, setIsLogin] = useState(false);
  const Stack = createNativeStackNavigator();

  useEffect(() => {
    const fetchData = async () => {
      const token = await getToken();
      if (token !== '') {
        setIsLogin(true);
      }
    };
  
    fetchData();
  }, []);
  
  return (
    <RecoilRoot>
      <NavigationContainer>
        <Stack.Navigator initialRouteName='Login'>
          {
            isLogin ? (
              <Stack.Screen name='Base' component={Base} options={{ headerShown: false }} />
            ) : (
              <>
                <Stack.Screen name='Login' options={{ headerShown: false }}>
                  {props => <LoginPage {...props} setIsLogin={setIsLogin} />}
                </Stack.Screen>
                <Stack.Screen name='KakaoLogin'>
                  {props => <KakaoLogin {...props} setIsLogin={setIsLogin} />}
                </Stack.Screen>
                <Stack.Screen name='Onboarding' options={{ headerShown: false}}>
                  {props => <OnboardingScreen {...props} setIsLogin={setIsLogin} />}
                </Stack.Screen>
              </>
            )
          }
        </Stack.Navigator>
      </NavigationContainer>
    </RecoilRoot>
  );
}