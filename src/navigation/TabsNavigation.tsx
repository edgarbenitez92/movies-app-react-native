import React from 'react';
import { TabMovie } from './TabMovie';
import { TabTopRated } from './TabTopRated';
import { TabsTvShow } from './TabTvShow';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { Platform } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { TabSearch } from './TabSearch';

const Tab = createMaterialBottomTabNavigator();

export const TabsNavigation = () => {

  return (
    <Tab.Navigator
      initialRouteName='TabMovie'
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
        name="TabMovie"
        component={TabMovie}
        options={{
          tabBarLabel: 'Cine',
          tabBarColor: '#EC9B45',
          tabBarIcon: (({ color }) => (
            <Icon color={color} size={25} name="videocam-outline" />
          ))
        }}
      />

      <Tab.Screen
        name="TabsTvShow"
        component={TabsTvShow}
        options={{
          tabBarLabel: 'TV Shows',
          tabBarColor: '#58149C',
          tabBarIcon: (({ color }) => (
            <Icon color={color} size={25} name="desktop-outline" />
          ))
        }}
      />

      <Tab.Screen
        name="TabTopRated"
        component={TabTopRated}
        options={{
          tabBarLabel: 'Top Rated',
          tabBarColor: '#135990',
          tabBarIcon: (({ color }) => (
            <Icon color={color} size={25} name="star-half-outline" />
          ))
        }}
      />

      <Tab.Screen
        name="TabSearch"
        component={TabSearch}
        options={{
          tabBarLabel: 'Search',
          tabBarColor: '#A62349',
          tabBarIcon: (({ color }) => (
            <Icon color={color} size={25} name="search-outline" />
          ))
        }}
      />
    </Tab.Navigator>
  );
}