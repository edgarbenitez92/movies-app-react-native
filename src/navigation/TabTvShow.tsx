
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { TvShowsScreen } from "../screens/TvShowsScreen";
import { TvShowDetailScreen } from '../screens/TvShowDetailScreen';

const Stack = createStackNavigator();

export const TabsTvShow = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        cardStyle: {
          backgroundColor: 'white'
        }
      }}
    >
      <Stack.Screen name="TvShowsScreen" component={TvShowsScreen} />
      <Stack.Screen name="TvShowDetailScreen" component={TvShowDetailScreen} />
    </Stack.Navigator>
  );
}
