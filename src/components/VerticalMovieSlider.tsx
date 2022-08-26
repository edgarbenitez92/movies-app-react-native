import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { MoviePoster } from './MoviePoster';
import { useGenresMovie } from '../hooks/useGenresMovie';

import { verticalSliderStyles } from '../styles/VerticalTRSliderStyles';
import { Movie } from '../interfaces/movies.interface';

import Icon from 'react-native-vector-icons/Octicons';
import 'intl';
import 'intl/locale-data/jsonp/en';

interface Props {
  movie: Movie;
  position: number;
}

export const VerticalMovieSlider = ({ movie, position }: Props) => {

  const { navigate } = useNavigation<any>();
  const isMovieAvailable: boolean = movie ? true : false;
  const { genres } = useGenresMovie(movie, isMovieAvailable);

  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={() => navigate('MovieDetailScreen', movie)}
    >
      <View style={verticalSliderStyles.sliderContainer}>
        <MoviePoster movie={movie} width={140} height={200} />

        <View style={verticalSliderStyles.detailsContainer}>

          {/* Movie title */}
          <Text style={verticalSliderStyles.movieTitle}>
            {position + 1}.- {movie.title}
          </Text>

          {/* Movie rated */}
          <Text style={{
            ...verticalSliderStyles.movieDetails,
            marginTop: 15
          }}>
            Rated: <Icon name='star' color='grey' size={16} /> {movie.vote_average}
          </Text>

          {/* Movie Voters */}
          <Text style={verticalSliderStyles.movieDetails}>
            N° voters: {new Intl.NumberFormat().format(movie.vote_count)}
          </Text>

          {/* Release date */}
          <Text style={verticalSliderStyles.movieDetails}>
            Release date: {movie.release_date}
          </Text>

          {/* Popularity */}
          <Text style={verticalSliderStyles.movieDetails}>
            Popularity:  {movie.popularity}
          </Text>

          {/* Genres */}
          <Text style={verticalSliderStyles.movieDetails}>
            Genre: {genres?.map(gene => gene.name).join(', ')}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  )
}
