import React from 'react';
import { ScrollView, View } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import Carousel from 'react-native-reanimated-carousel';

import { MoviePoster } from '../components/MoviePoster';
import { Spinner } from '../components/Spinner';
import { HorizontalSlider } from '../components/HorizontalSlider';

import { useMovies } from '../hooks/useMovies'

import { homeStyles } from '../styles/HomeStyles';

export const HomeScreen = () => {

  const { cineMovies, isLoading } = useMovies();
  const { top } = useSafeAreaInsets();

  if (isLoading) return <Spinner></Spinner>;

  const customConfig = {
    opacity: 0.9
  }

  return (
    <ScrollView>

      {/* <View style={{ marginTop: top + 20 }}> */}

      {/* Main Carousel */}
      <View style={homeStyles.carouselContainer}>
        <Carousel
          mode='parallax'
          style={homeStyles.carousel}
          windowSize={2}
          modeConfig={{
            parallaxScrollingScale: 0.9,
            parallaxScrollingOffset: 40,
            parallaxAdjacentItemScale: 0.75,
          }}
          snapEnabled
          data={cineMovies}
          renderItem={({ item }: any) => <MoviePoster movie={item} />}
          width={300}
          height={420}
        />
      </View>

      {/* Popular Movies */}
      <HorizontalSlider title='Popular' movies={cineMovies} />
      {/* </View> */}
    </ScrollView>
  )
}
