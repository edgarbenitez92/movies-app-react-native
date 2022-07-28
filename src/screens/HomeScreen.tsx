import React from 'react'
import { Text, View } from 'react-native'
import { useMovies } from '../hooks/useMovies'

export const HomeScreen = () => {

  const { cineMovies } = useMovies();

  console.log(cineMovies[3]?.title);
  return (
    <View>
      <Text>HomeScreen</Text>
    </View>
  )
}
