import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { ImageBackground, Text, View, TouchableOpacity } from 'react-native';
import { topRatedSelectionStyles } from '../styles/TopRatedSelectionStyles';

export const SearchSelectionScreen = () => {

  const { navigate } = useNavigation<any>();

  return (
    <>
      <ImageBackground
        source={require('../assets/images/series-and-movies.jpg')}
        style={topRatedSelectionStyles.imageBackground}
      />

      <View style={topRatedSelectionStyles.selectionContainer}>
        <TouchableOpacity
          activeOpacity={0.9}
          onPress={() => navigate('SearchScreen')}
          style={topRatedSelectionStyles.topRatedButton}
        >
          <Text style={topRatedSelectionStyles.topRatedButtonTitle}>
            Movies
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          activeOpacity={0.9}
          onPress={() => navigate('SearchTvShowScreen')}
          style={topRatedSelectionStyles.topRatedButton}
        >
          <Text style={topRatedSelectionStyles.topRatedButtonTitle}>
            Tv Shows and Series
          </Text>
        </TouchableOpacity>
      </View>
    </>
  )
}

