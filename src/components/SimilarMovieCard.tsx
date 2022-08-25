import React from 'react'
import { Image, View } from 'react-native';
import { Movie } from '../interfaces/movies.interface';
import { similarMovieCardStyle } from '../styles/SimilarMovieStyles';

interface Props {
  movie: Movie;
}

export const SimilarMovieCard = ({ movie }: Props) => {

  const imageURL = `https://image.tmdb.org/t/p/original/${movie.poster_path}`;

  return (
    <View
      style={similarMovieCardStyle.card}>
      <View style={similarMovieCardStyle.imageContainer}>
        <Image
          source={{ uri: imageURL }}
          style={similarMovieCardStyle.image}
        />
      </View>
    </View>
  )
}

