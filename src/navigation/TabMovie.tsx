import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { HomeScreen } from '../screens/HomeScreen';
import { MovieDetailScreen } from '../screens/MovieDetailScreen';
import { RootStackParamsMovie } from '../types/rootStackParamsMovie.type';

const Stack = createStackNavigator<RootStackParamsMovie>();

export const TabMovie = () => {

  return (
    <Stack.Navigator
      initialRouteName='HomeScreen'
      screenOptions={{
        headerShown: false,
        cardStyle: {
          backgroundColor: 'white'
        }
      }}
    >
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      <Stack.Screen name="MovieDetailScreen" component={MovieDetailScreen} />
    </Stack.Navigator>
  );
}