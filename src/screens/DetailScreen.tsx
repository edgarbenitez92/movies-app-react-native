import { StackScreenProps } from '@react-navigation/stack';
import React from 'react';
import { Image, ScrollView, Text, View } from 'react-native';
// import { Movie } from '../interfaces/movies.interfaces';
import { RootStackParams } from '../navigation/Navigation';
import { detailStyles } from '../styles/DetailStyles';

interface Props extends StackScreenProps<RootStackParams, 'DetailScreen'> { };

export const DetailScreen = ({ route }: Props) => {

  // const movie = route.params as Movie;
  const movie = route.params;
  const { poster_path, original_title, title } = movie;
  const uri = `https://image.tmdb.org/t/p/w500${poster_path}`;

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
    </ScrollView>
  )
}
