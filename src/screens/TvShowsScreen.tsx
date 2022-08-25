import React from 'react';
import { ScrollView, View } from 'react-native'

import { Spinner } from '../components/Spinner';

import { homeStyles } from '../styles/HomeStyles';
import { GradientBackground } from '../components/GradientBackground';
import { useTv } from '../hooks/useTv';
import { MainCarouselTv } from '../components/MainCarouselTv';
import { HorizontalSliderTv } from '../components/HorizontalSliderTv';


export const TvShowsScreen = () => {

  const { airingToday, popular, onTheAir, isLoading } = useTv();

  if (isLoading) return <Spinner />;

  return (
    <GradientBackground>
      <ScrollView>

        {/* Main Carousel */}
        <View style={homeStyles.carouselContainer}>
          <MainCarouselTv tvShows={airingToday} />
        </View>

        {/* On the Air */}
        <HorizontalSliderTv title='On the Air' tvShows={onTheAir} />

        {/* Popular */}
        <HorizontalSliderTv title='Popular' tvShows={popular} />
      </ScrollView>
    </GradientBackground>
  )
}
