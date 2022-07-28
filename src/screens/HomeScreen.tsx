import React from 'react'
import { ActivityIndicator, Text, View } from 'react-native'
import { Spinner } from '../components/Spinner';
import { useMovies } from '../hooks/useMovies'
import { styles } from '../styles/Home';

export const HomeScreen = () => {

  const { cineMovies, isLoading } = useMovies();

  if (isLoading) return <Spinner></Spinner>;

  return (
    <View>
      <Text>HomeScreen</Text>
    </View>
  )
}
