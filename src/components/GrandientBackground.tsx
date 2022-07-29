import React from 'react';
import { View } from 'react-native';

interface Props {
  children: JSX.Element | JSX.Element[]
}

export const GrandientBackground = ({ children }: Props) => {
  return (
    <View style={{ flex: 1, backgroundColor: '#084F6A' }}>
      {children}
    </View>
  )
}
