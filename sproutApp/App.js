import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ProfileSetup from './pages/ProfileSetup';       // Import your pages

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="ProfileSetup">
        <Stack.Screen name="ProfileSetup" component={ProfileSetup} />
  
      </Stack.Navigator>
    </NavigationContainer>
  );
}

