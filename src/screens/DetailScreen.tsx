import React from 'react';
import { ActivityIndicator, Image, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/Octicons'

import { MovieDetails } from '../components/MovieDetails';

import { useMovieDetails } from '../hooks/useMovieDetails';

import { detailStyles } from '../styles/DetailStyles';
import { RootStackParams } from '../types/rootStackParams.type';
import { Spinner } from '../components/Spinner';

interface Props extends StackScreenProps<RootStackParams, 'DetailScreen'> { };

export const DetailScreen = ({ route }: Props) => {

  // const movie = route.params as Movie;
  const movie = route.params;
  const { poster_path, original_title, title, id } = movie;
  const uri = `https://image.tmdb.org/t/p/w500${poster_path}`;
  const { isLoading, movieFullDetails, cast, similarMovies } = useMovieDetails(id);

  if (isLoading) return <Spinner />;

  return (
    <ScrollView>
      <View style={detailStyles.imageContainer}>
        <View style={detailStyles.imageBorder}>
          <Image
            source={{ uri }}
            style={detailStyles.posterImage}
          />
        </View>
      </View>

      <View style={detailStyles.titlesContainer}>
        <Text style={detailStyles.subTitle}>{original_title}</Text>
        <Text style={detailStyles.title}>{title}</Text>
      </View>

      <MovieDetails movieFull={movieFullDetails!} cast={cast} similarMovies={similarMovies!} />
    </ScrollView>
  )
}
