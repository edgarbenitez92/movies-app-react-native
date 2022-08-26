import React from 'react';
import { Image, ScrollView, Text, View } from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';

import { Spinner } from '../components/Spinner';
import { useTvShowDetails } from '../hooks/useTvShowDetails';

import { detailStyles } from '../styles/DetailStyles';
import { RootStackTvShowParams } from '../types/rootStackParamsTvShow.type';
import { TvShowDetails } from '../components/TvShowDetails';

interface Props extends StackScreenProps<RootStackTvShowParams, 'TvShowDetailScreen'> { };

export const TvShowDetailScreen = ({ route }: Props) => {

  const tvShow = route.params;
  const { poster_path, original_name, name, id } = tvShow;
  const uri = `https://image.tmdb.org/t/p/w500${poster_path}`;
  const { isLoading, tvShowDetails, cast, similarTvShows } = useTvShowDetails(id);

  console.log('a ver', similarTvShows);

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
        <Text style={detailStyles.subTitle}>{original_name}</Text>
        <Text style={detailStyles.title}>{name}</Text>
      </View>

      <TvShowDetails tvShowFull={tvShowDetails!} cast={cast} similarTvShows={similarTvShows!} />
    </ScrollView>
  )
}
