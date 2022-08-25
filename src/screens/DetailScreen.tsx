import React from 'react';
import { ActivityIndicator, Image, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/Octicons'

import { MovieDetails } from '../components/MovieDetails';

import { useMovieDetails } from '../hooks/useMovieDetails';

import { detailStyles } from '../styles/DetailStyles';
import { RootStackParams } from '../types/rootStackParams.type';

interface Props extends StackScreenProps<RootStackParams, 'DetailScreen'> { };

export const DetailScreen = ({ route, navigation }: Props) => {

  // const movie = route.params as Movie;
  const movie = route.params;
  const { poster_path, original_title, title, id } = movie;
  const uri = `https://image.tmdb.org/t/p/w500${poster_path}`;

  const { isLoading, movieFullDetails, cast, similarMovies } = useMovieDetails(id);

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

      {
        isLoading
          ? <ActivityIndicator size={35} color='grey' style={{ marginTop: 20 }} />
          : <MovieDetails movieFull={movieFullDetails!} cast={cast} similarMovies={similarMovies!} />
      }

      {/* Close DetailScreen */}
      {/* <TouchableOpacity
        style={detailStyles.returnButton}
        onPress={() => navigation.goBack()}
      >
        <Icon
          name='chevron-left'
          color='white'
          size={40}
        />
      </TouchableOpacity> */}
    </ScrollView>
  )
}
