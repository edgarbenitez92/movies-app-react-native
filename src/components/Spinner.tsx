import React from 'react'
import { ActivityIndicator, View } from 'react-native'
import { styles } from '../styles/Spinner'

export const Spinner = () => {
  return (
    <View style={styles.spinnerContainer}>
      <ActivityIndicator color="red" size={50}></ActivityIndicator>
    </View>
  )
}
