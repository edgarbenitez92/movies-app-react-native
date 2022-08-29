import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Image, TouchableOpacity, View } from 'react-native';
import { Movie } from '../interfaces/movies.interface';
import { moviePosterStyles } from '../styles/MoviePosterStyles';

interface Props {
  movie: Movie;
  height?: number;
  width?: number;
}

export const MoviePoster = ({ movie, height = 420, width = 300 }: Props) => {

  const { poster_path } = movie;
  const uri = `https://image.tmdb.org/t/p/w500${poster_path}`;
  const navigation = useNavigation<any>();

  return (
    <TouchableOpacity
      onPress={() => navigation.navigate('MovieDetailScreen', movie)}
      activeOpacity={0.95}
      style={{ width, height, ...moviePosterStyles.card }}>
      <View style={moviePosterStyles.imageContainer}>
        <Image
          source={
            (poster_path)
              ? { uri }
              : require('../assets/images/no-movie.jpg')
          }
          style={moviePosterStyles.image}
        />
      </View>
    </TouchableOpacity>
  )
}
