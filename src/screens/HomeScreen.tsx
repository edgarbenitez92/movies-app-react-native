import React from 'react';
import { View } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { MoviePoster } from '../components/MoviePoster';
import { Spinner } from '../components/Spinner';
import { useMovies } from '../hooks/useMovies'
import Carousel from 'react-native-reanimated-carousel';
import { homeStyles } from '../styles/Home';


export const HomeScreen = () => {

  const { cineMovies, isLoading } = useMovies();
  const { top } = useSafeAreaInsets();

  if (isLoading) return <Spinner></Spinner>;

  return (
    // <View style={{ marginTop: top + 20 }}>
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
    // </View>
  )
}
