import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Platform } from 'react-native';
import { StackNavigation } from './StackNavigation';
import { TabsTopRated } from './TabTopRated';
import Icon from 'react-native-vector-icons/Octicons';
import { TabsConfig } from './TabConfig';

const Tab = createBottomTabNavigator();

export const TabsNavigation = () => {

  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: '#5856D6',
        tabBarLabelStyle: {
          marginBottom: (Platform.OS == 'ios') ? 0 : 10,
        },
        tabBarStyle: {
          position: 'absolute',
          backgroundColor: 'rgba(255,255,255, 0.82)',
          borderWidth: 0,
          elevation: 0,
          height: (Platform.OS == 'ios') ? 80 : 60
        }
      }}
      sceneContainerStyle={{
        backgroundColor: 'white'
      }}
    >
      <Tab.Screen
        name="StackNavigation"
        component={StackNavigation}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: (({ color }) => (
            <Icon color={color} size={25} name="home" />
          ))
        }}
      />
      <Tab.Screen
        name="TabsTopRated"
        component={TabsTopRated}
        options={{
          tabBarLabel: 'Top Rated',
          tabBarIcon: (({ color }) => (
            <Icon color={color} size={25} name="search" />
          ))
        }}
      />

      <Tab.Screen
        name="TabsConfig"
        component={TabsConfig}
        options={{
          tabBarLabel: 'Config',
          tabBarIcon: (({ color }) => (
            <Icon color={color} size={25} name="search" />
          ))
        }}
      />
    </Tab.Navigator>
  );
}