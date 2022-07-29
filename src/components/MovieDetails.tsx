import React from 'react';
import { Text, View } from 'react-native';
import { Cast } from '../interfaces/credits.interface';
import { MovieFullDetail } from '../interfaces/movie.interface';

interface Props {
  movieFull: MovieFullDetail;
  cast: Cast[];
}

export const MovieDetails = ({ movieFull, cast }: Props) => {


  return (
    <View>
      <Text>{movieFull.release_date}</Text>
    </View>
  )
}
