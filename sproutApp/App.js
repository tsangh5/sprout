import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { GestureHandlerRootView } from 'react-native-gesture-handler'; // Import GestureHandlerRootView
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ProfileSetup from './pages/ProfileSetup'; // Import your pages
import LandingScreen from './components/LandingScreen';
import SignUpVerify from './components/SignUpVerify';
import SignInEmail from './components/SignInEmail';
import SignInMobile from './components/SignInMobile';
import SignUpReg from './components/SignUpReg';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="LandingScreen">
          <Stack.Screen 
            name="LandingScreen" 
            component={LandingScreen} 
            options={{ headerShown: false }} 
          />
          <Stack.Screen 
            name="ProfileSetup" 
            component={ProfileSetup} 
            options={{ headerShown: false }} 
          />
          <Stack.Screen 
            name="SignUpVerify" 
            component={SignUpVerify} 
            options={{ headerShown: false }} 
          />
          <Stack.Screen 
            name="SignInEmail" 
            component={SignInEmail} 
            options={{ headerShown: false }} 
          />
          <Stack.Screen 
            name="SignInMobile" 
            component={SignInMobile} 
            options={{ headerShown: false }} 
          />
          <Stack.Screen 
            name="SignUpReg" 
            component={SignUpReg} 
            options={{ headerShown: false }} 
          />
        </Stack.Navigator>
      </NavigationContainer>
    </GestureHandlerRootView>
  );
}

