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
import NavHeader from './components/NavHeader'
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import SproutIcon from './assets/sproutIcon.svg';
import NotifIcon from './assets/notifIcon.svg';
import SwipeIcon from './assets/swipeTabIcon.svg'
import MatchesIcon from './assets/matchesTabIcon.svg'
import ChatsIcon from './assets/chatsTabIcon.svg'
import ProfileIcon from './assets/profileTabIcon.svg'
import ExploreIcon from './assets/exploreTabIcon.svg'

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
                tabBarStyle: {
                    backgroundColor: 'white',
                    height: 60,
                },
                tabBarShowLabel: false,
                tabBarActiveTintColor: '#4CAF50', // Active icon color
                tabBarInactiveTintColor: 'white', // Inactive icon color
            }}
        >
            <Tab.Screen
                name="swipePage"
                component={SwipePage}
                options={{
                    tabBarIcon: ({ color }) => (
                        <SwipeIcon width={30} height={30} stroke={color} marginTop={20} />
                    ),
                }}
            />
            <Tab.Screen
                name="explorePage"
                component={ExplorePage}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <ExploreIcon width={30} height={30} marginTop={20} />
                    ),
                }}
            />
            <Tab.Screen
                name="matchesPage"
                component={MatchesPage}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <MatchesIcon width={30} height={30} marginTop={20} />
                    ),
                }}
            />
            <Tab.Screen
                name="chatsPage"
                component={ChatsPage}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <ChatsIcon width={30} height={30} marginTop={20}/>
                    ),
                }}
            />
            <Tab.Screen
                name="profilePage"
                component={ProfilePage}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <ProfileIcon width={30} height={30} marginTop={20}/>
                    ),
                }}
            />
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
              header: () => (
                  <View style={styles.header}>
                    <SproutIcon styles={styles.icon}/>
                    <TouchableOpacity style={styles.notificationButton}>
                      <NotifIcon/>
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
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center', // Ensures children are vertically centered
        height: 75,
        paddingHorizontal: 15,
        marginTop: 20,
        backgroundColor: '#f5f5f5',
        borderBottomWidth: 1,
        borderBottomColor: '#ddd',
    },
    icon: {
        width: 40,
        height: 40, // Adjust to fit your design
        resizeMode: 'contain', // Ensure the SVG maintains its aspect ratio
    },
    notificationButton: {
        padding: 10,
    },
    notificationText: {
        fontSize: 20,
    },
    logo: {
        display: 'inline-block',
    },
    tabIconContainer: {
        justifyContent: 'center', // Centers icon vertically
        alignItems: 'center', // Centers icon horizontally
        flex: 1, // Ensures the container takes full space of the tab
    },
    tabIcon: {
        width: 30,
        height: 30, // Consistent sizing for all icons
    },
    tabBarStyle: {
        backgroundColor: 'white',
        height: 60,
        justifyContent: 'center',
    },
});

