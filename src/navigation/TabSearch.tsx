import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { SearchMoviesScreen } from '../screens/SearchMoviesScreen';
import { RootStackParamsSearch } from '../types/rootStackParamsSearch.type';
import { SearchSelectionScreen } from '../screens/SearchSelectionScreen';
import { SearchTvShowScreen } from '../screens/SearchTvShowScreen';
import { MovieDetailScreen } from '../screens/MovieDetailScreen';
import { TvShowDetailScreen } from '../screens/TvShowDetailScreen';

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
      <Stack.Screen name="MovieDetailScreen" component={MovieDetailScreen} />
      <Stack.Screen name="SearchTvShowScreen" component={SearchTvShowScreen} />
      <Stack.Screen name="TvShowDetailScreen" component={TvShowDetailScreen} />
    </Stack.Navigator>
  );
}