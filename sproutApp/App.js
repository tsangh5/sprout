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
import SwipePage from './pages/swipePage'
import ExplorePage from './pages/explorePage'
import MatchesPage from './pages/matchesPage'
import ProfilePage from './pages/profilePage'
import ChatsPage from './pages/chatsPage'
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';


const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
function AuthStack() {
  return (
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
  )
}

function AppTabs() {
  return (
      <Tab.Navigator
          screenOptions={{
            tabBarStyle: { backgroundColor: '#fff' },
            headerShown: false,
          }}
      >
        <Tab.Screen name="swipePage" component={SwipePage} />
        <Tab.Screen name="explorePage" component={ExplorePage} />
        <Tab.Screen name="matchesPage" component={MatchesPage} />
        <Tab.Screen name="chatsPage" component={ChatsPage} />
        <Tab.Screen name="profilePage" component={ProfilePage} />
      </Tab.Navigator>
  );
}

function AppStack() {
  return (
      <Stack.Navigator>
        <Stack.Screen
            name="Main"
            component={AppTabs}
            options={{
              headerTitle: () => (
                  <View style={styles.header}>
                    <Image source={require('./assets/logo.js')} style={styles.logo} />
                    <TouchableOpacity style={styles.notificationButton}>
                      <Text style={styles.notificationText}>🔔</Text>
                    </TouchableOpacity>
                  </View>
              ),
            }}
        />
      </Stack.Navigator>
  );
}

export default function App() {
  const isAuthenticated = true; // Replace with logic to check if the user is signed in

  return (
      <GestureHandlerRootView style={{ flex: 1 }}>
        <NavigationContainer>
          {isAuthenticated ? <AppStack /> : <AuthStack />}
        </NavigationContainer>
      </GestureHandlerRootView>
  );
}
const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 60,
    paddingHorizontal: 15,
    backgroundColor: '#f5f5f5',
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  logo: {
    width: 100,
    height: 40,
    resizeMode: 'contain',
  },
  notificationButton: {
    padding: 10,
  },
  notificationText: {
    fontSize: 20,
  },
});
