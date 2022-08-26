import React, { useState } from 'react';
import { Alert, Keyboard, KeyboardAvoidingView, Platform, TextInput, TouchableOpacity, TouchableWithoutFeedback, View } from 'react-native';
import { Spinner } from '../components/Spinner';
import Icon from 'react-native-vector-icons/Ionicons';
import searchDB from '../api/searchDB';
import { searchScreenStyles } from '../styles/SearchScreenStyles';
import { TvShow, TvShowDB } from '../interfaces/tvShows.interface';
import { TvShowCardSearch } from '../components/TvShowCardSearch';

export const SearchTvShowScreen = () => {

  const [searchTerm, setSearchTerm] = useState('');
  const [isFetching, setIsFetching] = useState(false);
  const [tvShowsFiltered, setTvShowsFiltered] = useState<TvShow[]>([]);

  const findTvShowsFiltered = async (value: string) => {
    if (!value || value === '') return;

    setIsFetching(true);
    const { data } = await searchDB.get<TvShowDB>('/tv', { params: { query: value } });

    if (!data.results.length) showAlertNotFound(value);
    setTvShowsFiltered(data.results);
    setIsFetching(false);
  }

  const showAlertNotFound = (textSearch: string) => {
    Alert.alert(
      "Attention!",
      `No exist TvShows / Series by your filter search ${textSearch}`
    )
  }

  if (isFetching) return <Spinner />

  return (
    <KeyboardAvoidingView style={{ flex: 1 }}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={searchScreenStyles.searchContainer}>
          <View style={searchScreenStyles.textBackground}>
            <TextInput
              placeholder='Search TvShows / Series'
              style={{
                ...searchScreenStyles.textInput,
                top: (Platform.OS == 'ios') ? 0 : 2
              }}
              autoCapitalize="none"
              autoCorrect={false}
              value={searchTerm}
              onChangeText={setSearchTerm}
              onSubmitEditing={() => findTvShowsFiltered(searchTerm)}
            />

            <TouchableOpacity
              onPress={() => findTvShowsFiltered(searchTerm)}
            >
              <Icon
                name="search-outline"
                color='grey'
                size={20}
              />
            </TouchableOpacity>
          </View>

          <TvShowCardSearch tvShowsFiltered={tvShowsFiltered} />

        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  )
}
