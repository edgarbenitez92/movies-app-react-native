
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { TopRatedScreen } from "../screens/TopRatedScreen";

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
    </Tabs.Navigator>
  );
}
