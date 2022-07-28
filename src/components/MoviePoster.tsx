import React from 'react';
import { Image, Text, View } from 'react-native';
import { Movie } from '../interfaces/movies.interfaces';
import { moviePosterStyles } from '../styles/MoviePoster';

interface Props {
  movie: Movie;
}

export const MoviePoster = ({ movie }: Props) => {

  let { title, poster_path } = movie;

  const uri = `https://image.tmdb.org/t/p/w500${poster_path}`;


  return (
    <View style={moviePosterStyles.card}>
      <View style={moviePosterStyles.imageContainer}>
        <Image
          source={{ uri }}
          style={moviePosterStyles.image}
        />
      </View>
    </View>
  )
}
