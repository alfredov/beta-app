import * as React from 'react';
import { StyleSheet } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createNavigationContainerRef } from '@react-navigation/native';

import RegisterScreen from '../screens/Register';
import ChatScreen from '../screens/Chat';
import ProfileScreen from '../screens/Profile';

const Stack = createNativeStackNavigator();

export const CHAT_SCREEN = 'Chat';
export const REGISTER_SCREEN = 'Register';
export const PROFILE_SCREEN = 'Profile';
export const HOME_SCREEN = 'Home';

export const navigationRef = createNavigationContainerRef();
export const navigate = (name: string, params: {}) => {
  if (navigationRef.isReady()) {
    // @ts-ignore
    navigationRef.navigate(name, params);
  }
};

export const Root = () => (
  <Stack.Navigator>
    <Stack.Screen
      name={REGISTER_SCREEN}
      component={RegisterScreen}
      options={{ headerShown: false }}
    />
    <Stack.Screen
      name={HOME_SCREEN}
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
    <Tab.Screen name={CHAT_SCREEN} component={ChatScreen} />
    <Tab.Screen
      name={PROFILE_SCREEN}
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
