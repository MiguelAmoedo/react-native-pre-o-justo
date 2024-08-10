import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import LoginScreen from 'screens/LoginScreen/LoginScreen';
import SplashScreen from 'screens/SplashScreen/SplashScreen';
import HomeScreen from 'screens/HomeScreen/HomeScreen';
import InfinityScreen from 'screens/InfitityScreen/InfinityScreen';
import BottomNavigation from 'components/TabBarComponent/TabBar';
import ProfileScreen from 'screens/ProfileScreen/ProfileScreen';
import ProfileData from 'screens/ProfileDataScreen/ProfileData';
import PurchasesMadeScreen from 'screens/PurchasesMadeScreen/PurchasesMadeScreen';
import RegisterScreen from 'screens/RegisterScreen/RegisterScreen';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const HomeTabNavigator = ({ route }) => {
  const { loginResponse } = route.params; 
  
  return (
    <Tab.Navigator
      tabBar={(props) => <BottomNavigation {...props} />}
      screenOptions={{ headerShown: false }}
    >
      <Tab.Screen name="Home">
        {(props) => <HomeScreen {...props} loginResponse={loginResponse} />}
      </Tab.Screen>
      <Tab.Screen name="Bag">
        {(props) => <InfinityScreen {...props} loginResponse={loginResponse} />}
      </Tab.Screen>
      <Tab.Screen name="Profile">
        {(props) => <ProfileScreen {...props} loginResponse={loginResponse} />}
      </Tab.Screen>
      <Tab.Screen name="Data">
        {(props) => <ProfileData {...props} loginResponse={loginResponse} />}
      </Tab.Screen>
      <Tab.Screen name="Pushare">
        {(props) => <PurchasesMadeScreen {...props} loginResponse={loginResponse} />}
      </Tab.Screen>
      {/* Adicione mais telas se necessário */}
    </Tab.Navigator>
  );
};

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName="Splash">
        <Stack.Screen name="Splash" component={SplashScreen} />
       
        <Stack.Screen name="Login">
          {(props) => <LoginScreen {...props} />}
        </Stack.Screen>
        <Stack.Screen name="HomeTabs" component={HomeTabNavigator} />
        <Stack.Screen name="Register" component={RegisterScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
