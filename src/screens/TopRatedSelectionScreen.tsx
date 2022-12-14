import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { ImageBackground, Text, View, TouchableOpacity } from 'react-native';
import { topRatedSelectionStyles } from '../styles/TopRatedSelectionStyles';

export const TopRatedSelectionScreen = () => {

  const { navigate } = useNavigation<any>();

  return (
    <>
      <ImageBackground
        source={require('../assets/images/top-rated-selection.png')}
        style={topRatedSelectionStyles.imageBackground}
      />

      <View style={topRatedSelectionStyles.selectionContainer}>
        <TouchableOpacity
          activeOpacity={0.9}
          onPress={() => navigate('TopRatedMoviesScreen')}
          style={topRatedSelectionStyles.topRatedButton}
        >
          <Text style={topRatedSelectionStyles.topRatedButtonTitle}>
            Top Rated Movies
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          activeOpacity={0.9}
          onPress={() => navigate('TopRatedTvShowsScreen')}
          style={topRatedSelectionStyles.topRatedButton}
        >
          <Text style={topRatedSelectionStyles.topRatedButtonTitle}>
            Top Rated Tv Shows
          </Text>
        </TouchableOpacity>
      </View>
    </>
  )
}

