import { StackScreenProps } from '@react-navigation/stack';
import React from 'react';
import { ActivityIndicator, Image, ScrollView, Text, View } from 'react-native';
// import { Movie } from '../interfaces/movies.interfaces';
import { RootStackParams } from '../navigation/Navigation';
import { detailStyles } from '../styles/DetailStyles';

import Icon from 'react-native-vector-icons/Octicons'
import { useMovieDetails } from '../hooks/useMovieDetails';
import { Spinner } from '../components/Spinner';
import { MovieDetails } from '../components/MovieDetails';

interface Props extends StackScreenProps<RootStackParams, 'DetailScreen'> { };

export const DetailScreen = ({ route }: Props) => {

  // const movie = route.params as Movie;
  const movie = route.params;
  const { poster_path, original_title, title, id } = movie;
  const uri = `https://image.tmdb.org/t/p/w500${poster_path}`;

  const { isLoading, movieFullDetails, cast } = useMovieDetails(id);

  // if (isLoading) return <Spinner></Spinner>;

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
          : <MovieDetails movieFull={movieFullDetails!} cast={cast} />
        // <Icon name='star' color='grey' size={20} />
      }
    </ScrollView>
  )
}
