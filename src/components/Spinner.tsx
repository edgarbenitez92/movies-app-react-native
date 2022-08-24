import React from 'react'
import { ActivityIndicator, View } from 'react-native'
import { spinnerStyles } from '../styles/SpinnerStyles'

export const Spinner = () => {
  return (
    <View style={spinnerStyles.spinnerContainer}>
      <ActivityIndicator color="red" size={50} />
    </View>
  )
}
