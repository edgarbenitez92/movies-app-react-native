import React from 'react';
import { FlatList, View } from 'react-native';
import { Spinner } from '../components/Spinner';
import { VerticalTvShowSlider } from '../components/VerticalTvShowSlider';
import { useTopRatedTvShow } from '../hooks/useTopRatedTvShow';

export const TopRatedTvShowsScreen = () => {

  const { topRated, isLoading } = useTopRatedTvShow();

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
          <VerticalTvShowSlider tvShow={item} position={index} />
        )}
        keyExtractor={(item) => item.id.toString()}
        showsVerticalScrollIndicator={false}
      />
    </View>
  )
}