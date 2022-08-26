import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { SearchMoviesScreen } from '../screens/SearchMoviesScreen';
import { RootStackParamsSearch } from '../types/rootStackParamsSeearch.type';
import { SearchSelectionScreen } from '../screens/SearchSelectionScreen';
import { SearchTvShowScreen } from '../screens/SearchTvShowScreen';

const Stack = createStackNavigator<RootStackParamsSearch>();

export const TabSearch = () => {

  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        cardStyle: {
          backgroundColor: 'white'
        }
      }}
    >
      <Stack.Screen name="SearchSelectionScreen" component={SearchSelectionScreen} />
      <Stack.Screen name="SearchMoviesScreen" component={SearchMoviesScreen} />
      <Stack.Screen name="SearchTvShowScreen" component={SearchTvShowScreen} />
    </Stack.Navigator>
  );
}