import { useNavigation } from '@react-navigation/native';
import React from 'react'
import { Image, View, TouchableOpacity } from 'react-native';
import { Movie } from '../interfaces/movies.interface';
import { TvShow } from '../interfaces/tvShows.interface';
import { similarCardStyle } from '../styles/SimilarCardStyles';

interface Props {
  card: Movie | TvShow;
  typeCard: 'Movie' | 'TvShow';
}

export const SimilarCard = ({ card, typeCard }: Props) => {

  const imageURL = `https://image.tmdb.org/t/p/original/${card.poster_path}`;
  const navigation = useNavigation<any>();

  return (
    <TouchableOpacity
      activeOpacity={0.9}
      style={similarCardStyle.card}
      onPress={() => {
        if (typeCard == 'TvShow') navigation.replace('TvShowDetailScreen', card)
        if (typeCard == 'Movie') navigation.replace('MovieDetailScreen', card)
      }}
    >
      <View style={similarCardStyle.imageContainer}>
        <Image
          source={{ uri: imageURL }}
          style={similarCardStyle.image}
        />
      </View>
    </TouchableOpacity>
  )
}

