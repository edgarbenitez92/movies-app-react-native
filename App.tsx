import React from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { GradientProvider } from './src/context/GradientContext';
import { TabsNavigation } from './src/navigation/TabsNavigation';

const AppState = ({ children }: any) => {

  return (
    <GradientProvider>
      {children}
    </GradientProvider>
  )
}

const App = () => {
  return (
    <NavigationContainer>
      <AppState>
        <TabsNavigation />
      </AppState>
    </NavigationContainer>
  )
}

export default App;