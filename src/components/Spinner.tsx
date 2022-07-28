import React from 'react'
import { ActivityIndicator, View } from 'react-native'
import { spinnerStyles } from '../styles/Spinner'

export const Spinner = () => {
  return (
    <View style={spinnerStyles.spinnerContainer}>
      <ActivityIndicator color="red" size={50}></ActivityIndicator>
    </View>
  )
}
