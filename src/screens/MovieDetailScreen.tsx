import React from 'react';
import { Image, ScrollView, Text, View } from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';

import { MovieDetails } from '../components/MovieDetails';
import { useMovieDetails } from '../hooks/useMovieDetails';
import { Spinner } from '../components/Spinner';

import { detailStyles } from '../styles/DetailStyles';
import { RootStackParams } from '../types/rootStackParams.type';

interface Props extends StackScreenProps<RootStackParams, 'MovieDetailScreen'> { };

export const MovieDetailScreen = ({ route }: Props) => {

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
