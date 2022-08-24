
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { TopRatedScreen } from "../screens/TopRatedScreen";
import { DetailScreen } from "../screens/DetailScreen";

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
      <Tabs.Screen name="TopRatedScreen" component={TopRatedScreen} />
      <Tabs.Screen name="DetailScreen" component={DetailScreen} />
    </Tabs.Navigator>
  );
}
