import React, { useState } from 'react';
import { Alert, Keyboard, KeyboardAvoidingView, Platform, TextInput, TouchableOpacity, TouchableWithoutFeedback, View } from 'react-native';
import { Movie, MovieDB } from '../interfaces/movies.interface';
import { Spinner } from '../components/Spinner';
import Icon from 'react-native-vector-icons/Ionicons';
import searchDB from '../api/searchDB';
import { searchScreenStyles } from '../styles/SearchScreenStyles';
import { MovieCardSearch } from '../components/MovieCardSearch';

export const SearchScreen = () => {

  const [searchTerm, setSearchTerm] = useState('');
  const [isFetching, setIsFetching] = useState(false);
  const [moviesFiltered, setMoviesFiltered] = useState<Movie[]>([]);

  const findMoviesFiltered = async (value: string) => {
    if (!value || value === '') return;

    setIsFetching(true);
    const { data } = await searchDB.get<MovieDB>('/movie', { params: { query: value } });

    if (!data.results.length) showAlertNotFound(value);
    setMoviesFiltered(data.results);
    setIsFetching(false);
  }

  const showAlertNotFound = (textSearch: string) => {
    Alert.alert(
      "Attention!",
      `No exist movies by your filter search ${textSearch}`
    )
  }

  if (isFetching) return <Spinner />

  return (
    <KeyboardAvoidingView style={{ flex: 1 }}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={searchScreenStyles.searchContainer}>
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

          <MovieCardSearch moviesFiltered={moviesFiltered} />

        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  )
}
