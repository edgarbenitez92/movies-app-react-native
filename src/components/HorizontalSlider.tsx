import React from 'react';
import { FlatList, Text, View } from 'react-native';
import { Movie } from '../interfaces/movies.interfaces';
import { horizontalSliderStyles } from '../styles/HorizontalSliderStyles';
import { MoviePoster } from './MoviePoster';

interface Props {
  title?: string;
  movies: Movie[];
}

export const HorizontalSlider = ({ title, movies }: Props) => {

  return (
    <View style={{ height: (title) ? 260 : 230, marginLeft: 10 }}>

      {
        title && <Text style={horizontalSliderStyles.sliderTitle}>{title}</Text>
      }

      <FlatList
        data={movies}
        renderItem={({ item }) => (
          <MoviePoster movie={item} width={140} height={200} />
        )}
        keyExtractor={(item) => item.id.toString()}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  )
}
