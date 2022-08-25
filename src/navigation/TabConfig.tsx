
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { TvShowsScreen } from "../screens/TvShowsScreen";

const Tabs = createStackNavigator();

export const TabsConfig = () => {
  return (
    <Tabs.Navigator
      screenOptions={{
        headerShown: false,
        cardStyle: {
          backgroundColor: 'white'
        }
      }}
    >
      <Tabs.Screen name="TvShowsScreen" component={TvShowsScreen} />
    </Tabs.Navigator>
  );
}
