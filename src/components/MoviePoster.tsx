import React from 'react';
import { Image, Text, View } from 'react-native';
import { Movie } from '../interfaces/movies.interfaces';
import { moviePosterStyles } from '../styles/MoviePosterStyles';

interface Props {
  movie: Movie;
  height?: number;
  width?: number;
}

export const MoviePoster = ({ movie, height = 420, width = 300 }: Props) => {

  let { title, poster_path } = movie;

  const uri = `https://image.tmdb.org/t/p/w500${poster_path}`;

  return (
    <View style={{ width, height, ...moviePosterStyles.card }}>
      <View style={moviePosterStyles.imageContainer}>
        <Image
          source={{ uri }}
          style={moviePosterStyles.image}
        />
      </View>
    </View>
  )
}
