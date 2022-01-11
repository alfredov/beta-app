import * as React from 'react';
import { StyleSheet } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import RegisterScreen from '../screens/Register';
import ChatScreen from '../screens/Chat';
import ProfileScreen from '../screens/Profile';

const Stack = createNativeStackNavigator();

export const Root = () => (
  <Stack.Navigator>
    <Stack.Screen
      name="Register"
      component={RegisterScreen}
      options={{ headerShown: false }}
    />
    <Stack.Screen
      name="Root"
      component={TopBarNavigator}
      options={{ headerShown: false }}
    />
  </Stack.Navigator>
);

const Tab = createMaterialTopTabNavigator();

const TopBarNavigator = () => (
  <Tab.Navigator
    screenOptions={{
      tabBarActiveTintColor: '#FF8755',
      tabBarInactiveTintColor: '#00000075',
      tabBarIndicatorStyle: styles.tabBarIndicatorStyle,
      tabBarLabelStyle: styles.tabBarLabelStyle,
    }}>
    <Tab.Screen name="Chat" component={ChatScreen} />
    <Tab.Screen
      name="Profile"
      component={ProfileScreen}
      options={{ title: 'Cuenta' }}
    />
  </Tab.Navigator>
);

const styles = StyleSheet.create({
  tabBarLabelStyle: {
    fontSize: 16,
    fontWeight: '700',
    fontFamily: 'System',
    textTransform: 'capitalize',
  },
  tabBarIndicatorStyle: { backgroundColor: '#FF8755', height: 5 },
});
