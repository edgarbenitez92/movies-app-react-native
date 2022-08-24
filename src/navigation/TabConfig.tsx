
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { ConfigurationScreen } from "../screens/ConfigurationScreen";

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
      <Tabs.Screen name="ConfigurationScreen" component={ConfigurationScreen} />
    </Tabs.Navigator>
  );
}
