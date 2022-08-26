
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { TopRatedMoviesScreen } from "../screens/TopRatedMoviesScreen";
import { MovieDetailScreen } from "../screens/MovieDetailScreen";
import { TopRatedSelectionScreen } from "../screens/TopRatedSelectionScreen";
import { TopRatedTvShowsScreen } from "../screens/TopRatedTvShowsScreen";
import { TvShowDetailScreen } from '../screens/TvShowDetailScreen';

const Tabs = createStackNavigator();

export const TabsTopRated = () => {
  return (
    <Tabs.Navigator
      screenOptions={{
        headerShown: false,
        cardStyle: {
          backgroundColor: 'white'
        }
      }}
    >
      <Tabs.Screen name="TopRatedSelectionScreen" component={TopRatedSelectionScreen} />
      <Tabs.Screen name="TopRatedMoviesScreen" component={TopRatedMoviesScreen} />
      <Tabs.Screen name="TopRatedTvShowsScreen" component={TopRatedTvShowsScreen} />
      <Tabs.Screen name="MovieDetailScreen" component={MovieDetailScreen} />
      <Tabs.Screen name="TvShowDetailScreen" component={TvShowDetailScreen} />
    </Tabs.Navigator>
  );
}
