import React from 'react'
import { useNavigation } from '@react-navigation/native';
import { Image, StyleSheet, TouchableOpacity, View } from 'react-native';
import { Movie } from '../interfaces/movies.interface';
import { similarMovieCardStyle } from '../styles/SimilarMovieStyles';

interface Props {
  movie: Movie;
}

export const SimilarMovieCard = ({ movie }: Props) => {

  const navigation = useNavigation<any>();
  const imageURL = `https://image.tmdb.org/t/p/original/${movie.poster_path}`;

  return (
    <TouchableOpacity
      activeOpacity={0.9}
      onPress={() => navigation.replace('DetailScreen', movie)}
      style={similarMovieCardStyle.cardContainer}
    >
      <View
        style={similarMovieCardStyle.card}>
        <View style={similarMovieCardStyle.imageContainer}>
          <Image
            source={{ uri: imageURL }}
            style={similarMovieCardStyle.image}
          />
        </View>
      </View>
    </TouchableOpacity>
  )
}

