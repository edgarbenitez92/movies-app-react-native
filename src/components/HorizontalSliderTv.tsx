import React from 'react';
import { FlatList, Text, View } from 'react-native';
import { horizontalSliderStyles } from '../styles/HorizontalSliderStyles';
import { MoviePoster } from './MoviePoster';
import { TvShow } from '../interfaces/tvShow.interface';
import { TvShowPoster } from './TvShowPoster';

interface Props {
  title?: string;
  tvShows: TvShow[];
}

export const HorizontalSliderTv = ({ title, tvShows }: Props) => {

  return (
    <View style={{ height: (title) ? 260 : 230, marginLeft: 10 }}>

      {
        title && <Text style={horizontalSliderStyles.sliderTitle}>{title}</Text>
      }

      <FlatList
        data={tvShows}
        renderItem={({ item }) => (
          <TvShowPoster tvShow={item} width={140} height={200} />
        )}
        keyExtractor={(item) => item.id.toString()}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  )
}
