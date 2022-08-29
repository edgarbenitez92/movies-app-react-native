
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { TvShowsScreen } from "../screens/TvShowsScreen";
import { TvShowDetailScreen } from '../screens/TvShowDetailScreen';
import { RootStackTvShowParams } from '../types/rootStackParamsTvShow.type';

const Stack = createStackNavigator<RootStackTvShowParams>();

export const TabTvShow = () => {
  return (
    <Stack.Navigator
      initialRouteName="TvShowsScreen"
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
