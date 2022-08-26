
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { TopRatedMoviesScreen } from "../screens/TopRatedMoviesScreen";
import { MovieDetailScreen } from "../screens/MovieDetailScreen";
import { TopRatedSelectionScreen } from "../screens/TopRatedSelectionScreen";
import { TopRatedTvShowsScreen } from "../screens/TopRatedTvShowsScreen";
import { TvShowDetailScreen } from '../screens/TvShowDetailScreen';
import { RootStackParamsTopRated } from "../types/rootStackParamsTopRated.type";

const Stack = createStackNavigator<RootStackParamsTopRated>();

export const TabTopRated = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        cardStyle: {
          backgroundColor: 'white'
        }
      }}
    >
      <Stack.Screen name="TopRatedSelectionScreen" component={TopRatedSelectionScreen} />
      <Stack.Screen name="TopRatedMoviesScreen" component={TopRatedMoviesScreen} />
      <Stack.Screen name="TopRatedTvShowsScreen" component={TopRatedTvShowsScreen} />
      <Stack.Screen name="MovieDetailScreen" component={MovieDetailScreen} />
      <Stack.Screen name="TvShowDetailScreen" component={TvShowDetailScreen} />
    </Stack.Navigator>
  );
}
