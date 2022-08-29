import React from 'react';
import { FlatList, View } from 'react-native';
import { Spinner } from '../components/Spinner';
import { useTopRatedMovie } from '../hooks/useTopRatedMovie';
import { VerticalMovieSlider } from '../components/VerticalMovieSlider';

export const TopRatedMoviesScreen = () => {

  const { topRated, isLoading } = useTopRatedMovie();

  if (isLoading) return <Spinner />;

  return (
    <View style={{
      flex: 1,
      backgroundColor: '#DEDCDC'
    }}>
      <View style={{ marginBottom: 10 }} />

      <FlatList
        data={topRated}
        renderItem={({ item, index }) => (
          <VerticalMovieSlider movie={item} position={index} />
        )}
        keyExtractor={(item) => item.id.toString()}
        showsVerticalScrollIndicator={false}
      />
    </View>
  )
}