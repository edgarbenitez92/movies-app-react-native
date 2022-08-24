import React from 'react';
import { StackNavigation } from './StackNavigation';
import { TabsTopRated } from './TabTopRated';
import Icon from 'react-native-vector-icons/Octicons';
import { TabsConfig } from './TabConfig';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

const Tab = createMaterialBottomTabNavigator();

export const TabsNavigation = () => {

  return (
    <Tab.Navigator
      initialRouteName='StackNavigation'
      activeColor="#f0edf6"
      inactiveColor="#000000"
      shifting={true}
    >
      <Tab.Screen
        name="StackNavigation"
        component={StackNavigation}
        options={{
          tabBarLabel: 'Home',
          tabBarColor: '#EC9B45',
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
          tabBarColor: '#135990',
          tabBarIcon: (({ color }) => (
            <Icon color={color} size={25} name="search" />
          ))
        }}
      />

      <Tab.Screen
        name="TabsConfig"
        component={TabsConfig}
        options={{
          tabBarLabel: 'Settings',
          tabBarColor: '#58149C',
          tabBarIcon: (({ color }) => (
            <Icon color={color} size={25} name="search" />
          ))
        }}
      />
    </Tab.Navigator>
  );
}