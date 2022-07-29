import React from 'react';
import { FlatList, ScrollView, Text, View } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { MoviePoster } from '../components/MoviePoster';
import { Spinner } from '../components/Spinner';
import { useMovies } from '../hooks/useMovies'
import Carousel from 'react-native-reanimated-carousel';
import { homeStyles } from '../styles/HomeStyles';


export const HomeScreen = () => {

  const { cineMovies, isLoading } = useMovies();
  const { top } = useSafeAreaInsets();

  if (isLoading) return <Spinner></Spinner>;

  return (
    <ScrollView>

      <View style={{ marginTop: top + 20 }}>

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
        <View style={{ backgroundColor: 'red', height: 260 }}>
          <Text style={{ fontSize: 30, fontWeight: 'bold' }}>Popular</Text>
          <FlatList
            data={cineMovies}
            renderItem={({ item }: any) => (
              <MoviePoster movie={item} width={140} height={200} />
            )}
            keyExtractor={(item) => item.id.toString()}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
          />
        </View>
      </View>
    </ScrollView>
  )
}
