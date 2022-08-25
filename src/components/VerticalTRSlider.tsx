import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { Movie } from '../interfaces/movies.interfaces';
import { verticalSliderStyles } from '../styles/VerticalTRSliderStyles';
import { MoviePoster } from './MoviePoster';
import Icon from 'react-native-vector-icons/Octicons';
import { useNavigation } from '@react-navigation/native';
import 'intl';
import 'intl/locale-data/jsonp/en';
import { useGenresMovie } from '../hooks/useGenresMovie';

interface Props {
  movie: Movie;
  position: number;
}

export const VerticalTRSlider = ({ movie, position }: Props) => {

  const { navigate } = useNavigation<any>();
  const isMovieAvailable: boolean = movie ? true : false;
  const { genres } = useGenresMovie(movie, isMovieAvailable);

  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={() => navigate('DetailScreen', movie)}
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
