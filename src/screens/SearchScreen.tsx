import React, { useState } from 'react';
import { FlatList, Image, Keyboard, KeyboardAvoidingView, Platform, TextInput, TouchableOpacity, TouchableWithoutFeedback, View } from 'react-native';
import { Movie, MovieDB } from '../interfaces/movies.interface';
import { Spinner } from '../components/Spinner';
import Icon from 'react-native-vector-icons/Ionicons';
import searchDB from '../api/searchDB';
import { searchScreenStyles } from '../styles/SearchScreenStyles';

export const SearchScreen = () => {

  const [searchTerm, setSearchTerm] = useState('');
  const [isFetching, setIsFetching] = useState(false);
  const [moviesFiltered, setMoviesFiltered] = useState<Movie[]>([]);

  const findMoviesFiltered = async (value: string) => {
    if (!value || value === '') return;
    if (value == searchTerm) return;

    setIsFetching(true);
    const { data } = await searchDB.get<MovieDB>('/movie', { params: { query: value } });

    setMoviesFiltered(data ? data.results : []);
    setIsFetching(false);
  }

  if (isFetching) return <Spinner />

  return (
    <KeyboardAvoidingView style={{ flex: 1 }}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={searchScreenStyles.searchContainer}>
          <View >
            <View style={searchScreenStyles.textBackground}>
              <TextInput
                placeholder='Search Movies'
                style={{
                  ...searchScreenStyles.textInput,
                  top: (Platform.OS == 'ios') ? 0 : 2
                }}
                autoCapitalize="none"
                autoCorrect={false}
                value={searchTerm}
                onChangeText={setSearchTerm}
                onSubmitEditing={() => findMoviesFiltered(searchTerm)}
              />

              <TouchableOpacity
                onPress={() => findMoviesFiltered(searchTerm)}
              >
                <Icon
                  name="search-outline"
                  color='grey'
                  size={20}
                />
              </TouchableOpacity>
            </View>
          </View>

          {
            isFetching
              ? (<Spinner />)
              : (
                <FlatList
                  data={moviesFiltered}
                  keyExtractor={(movie) => movie.id.toString()}
                  showsVerticalScrollIndicator={false}
                  numColumns={2}

                  renderItem={(({ item }) => (
                    <View style={{
                      marginVertical: 5,
                      flex: 1,
                      justifyContent: 'space-between',
                      alignItems: 'center'
                    }}>
                      <Image
                        source={
                          (item.poster_path)
                            ? { uri: `https://image.tmdb.org/t/p/w500${item.poster_path}` }
                            : require('../assets/images/no-movie.jpg'
                            )}
                        style={{
                          width: 180,
                          height: 250,
                          borderRadius: 10
                        }}
                      />
                    </View>
                  ))}
                />
              )
          }
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  )
}