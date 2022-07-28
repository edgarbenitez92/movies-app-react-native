import React from 'react'
import { View } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { MoviePoster } from '../components/MoviePoster';
import { Spinner } from '../components/Spinner';
import { useMovies } from '../hooks/useMovies'


export const HomeScreen = () => {

  const { cineMovies, isLoading } = useMovies();
  const { top } = useSafeAreaInsets();

  if (isLoading) return <Spinner></Spinner>;

  return (
    <View style={{ marginTop: top * 20 }}>
      <MoviePoster movie={cineMovies[3]} />
    </View>
  )
}
