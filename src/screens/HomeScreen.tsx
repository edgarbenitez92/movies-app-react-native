import React from 'react';
import { ScrollView, View } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import Carousel from 'react-native-reanimated-carousel';

import { MoviePoster } from '../components/MoviePoster';
import { Spinner } from '../components/Spinner';
import { HorizontalSlider } from '../components/HorizontalSlider';

import { useMovies } from '../hooks/useMovies'

import { homeStyles } from '../styles/HomeStyles';
import { MainCarousel } from '../components/MainCarousel';
import { GradientBackground } from '../components/GradientBackground';

export const HomeScreen = () => {

  const { nowPlaying, popular, topRated, upcoming, isLoading } = useMovies();
  const { top } = useSafeAreaInsets();

  if (isLoading) return <Spinner></Spinner>;

  return (
    <GradientBackground>
      <ScrollView>

        {/* Main Carousel */}
        <View style={homeStyles.carouselContainer}>
          <MainCarousel movies={nowPlaying} />
        </View>

        {/* Movie Theater */}
        <HorizontalSlider title='Movie Theater' movies={nowPlaying} />

        {/* Popular Movies */}
        <HorizontalSlider title='Popular' movies={popular} />

        {/* Top rated */}
        <HorizontalSlider title='Top Rated' movies={topRated} />

        {/* Upcoming */}
        <HorizontalSlider title='Upcoming' movies={upcoming} />
      </ScrollView>
    </GradientBackground>
  )
}
