import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Image, TouchableOpacity, View } from 'react-native';
import { TvShow } from '../interfaces/tvShow.interface';
import { moviePosterStyles } from '../styles/MoviePosterStyles';

interface Props {
  tvShow: TvShow;
  height?: number;
  width?: number;
}

export const TvShowPoster = ({ tvShow, height = 420, width = 300 }: Props) => {

  const { poster_path } = tvShow;
  const uri = `https://image.tmdb.org/t/p/w500${poster_path}`;
  const navigation = useNavigation<any>();

  return (
    <TouchableOpacity
      onPress={() => navigation.navigate('DetailScreen', tvShow)}
      activeOpacity={0.95}
      style={{ width, height, ...moviePosterStyles.card }}>
      <View style={moviePosterStyles.imageContainer}>
        <Image
          source={{ uri }}
          style={moviePosterStyles.image}
        />
      </View>
    </TouchableOpacity>
  )
}
