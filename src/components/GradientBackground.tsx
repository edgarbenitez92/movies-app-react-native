import React, { useContext } from 'react';
import { StyleSheet, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { GradientContext } from '../context/GradientContext';

interface Props {
  children: JSX.Element | JSX.Element[]
}

export const GradientBackground = ({ children }: Props) => {

  const { colors: { primary, secondary } } = useContext(GradientContext);

  return (
    <View style={{ flex: 1 }}>
      <LinearGradient
        colors={[primary, secondary, '#ffe6e6']}
        style={{ ...StyleSheet.absoluteFillObject }}
        start={{ x: 0.1, y: 0.1 }}
        end={{ x: 0.5, y: 0.5 }}
      />

      {children}
    </View>
  )
}
