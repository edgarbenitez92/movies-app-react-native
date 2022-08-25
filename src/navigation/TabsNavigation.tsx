import React from 'react';
import { StackNavigation } from './StackNavigation';
import { TabsTopRated } from './TabTopRated';
import Icon from 'react-native-vector-icons/Ionicons';
import { TabsConfig } from './TabConfig';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { Platform } from 'react-native';

const Tab = createMaterialBottomTabNavigator();

export const TabsNavigation = () => {

  return (
    <Tab.Navigator
      initialRouteName='StackNavigation'
      activeColor="#f0edf6"
      keyboardHidesNavigationBar={true}
      inactiveColor="#000000"
      shifting={true}
      barStyle={{
        borderWidth: 0,
        elevation: 0,
        height: (Platform.OS == 'ios') ? 80 : 54
      }}
    >
      <Tab.Screen
        name="StackNavigation"
        component={StackNavigation}
        options={{
          tabBarLabel: 'Cine',
          tabBarColor: '#EC9B45',
          tabBarIcon: (({ color }) => (
            <Icon color={color} size={25} name="videocam-outline" />
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
            <Icon color={color} size={25} name="star-half-outline" />
          ))
        }}
      />

      <Tab.Screen
        name="TabsConfig"
        component={TabsConfig}
        options={{
          tabBarLabel: 'TV Shows',
          tabBarColor: '#58149C',
          tabBarIcon: (({ color }) => (
            <Icon color={color} size={25} name="desktop-outline" />
          ))
        }}
      />
    </Tab.Navigator>
  );
}