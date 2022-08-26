import React from 'react'
import { Image, View } from 'react-native';
import { similarCardStyle } from '../styles/SimilarCardStyles';

interface Props {
  posterPath: string;
}

export const SimilarCard = ({ posterPath }: Props) => {

  const imageURL = `https://image.tmdb.org/t/p/original/${posterPath}`;

  return (
    <View
      style={similarCardStyle.card}>
      <View style={similarCardStyle.imageContainer}>
        <Image
          source={{ uri: imageURL }}
          style={similarCardStyle.image}
        />
      </View>
    </View>
  )
}

