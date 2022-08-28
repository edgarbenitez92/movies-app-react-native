import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useGenres } from '../hooks/useGenres';

import { verticalSliderStyles } from '../styles/VerticalTRSliderStyles';
import { TvShow } from '../interfaces/tvShows.interface';
import { TvShowPoster } from './TvShowPoster';

import Icon from 'react-native-vector-icons/Octicons';
import 'intl';
import 'intl/locale-data/jsonp/en';

interface Props {
  tvShow: TvShow;
  position: number;
}

export const VerticalTvShowSlider = ({ tvShow, position }: Props) => {

  const { navigate } = useNavigation<any>();
  const isTvShowAvailable: boolean = tvShow ? true : false;
  const { genres } = useGenres(tvShow.genre_ids, isTvShowAvailable, 'tv');

  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={() => navigate('TvShowDetailScreen', tvShow)}
    >
      <View style={verticalSliderStyles.sliderContainer}>
        <TvShowPoster tvShow={tvShow} width={140} height={200} />

        <View style={verticalSliderStyles.detailsContainer}>

          {/* Movie title */}
          <Text style={verticalSliderStyles.movieTitle}>
            {position + 1}.- {tvShow.name}
          </Text>

          {/* Movie rated */}
          <Text style={{
            ...verticalSliderStyles.movieDetails,
            marginTop: 15
          }}>
            Rated: <Icon name='star' color='grey' size={16} /> {tvShow.vote_average}
          </Text>

          {/* Movie Voters */}
          <Text style={verticalSliderStyles.movieDetails}>
            N° voters: {new Intl.NumberFormat().format(tvShow.vote_count)}
          </Text>

          {/* Release date */}
          <Text style={verticalSliderStyles.movieDetails}>
            First air date: {tvShow.first_air_date}
          </Text>

          {/* Popularity */}
          <Text style={verticalSliderStyles.movieDetails}>
            Popularity:  {tvShow.popularity}
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
