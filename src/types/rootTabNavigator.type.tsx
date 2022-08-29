import { RootStackParamsMovie } from './rootStackParamsMovie.type';
import { RootStackTvShowParams } from './rootStackParamsTvShow.type';
import { RootStackParamsSearch } from './rootStackParamsSearch.type';
import { RootStackParamsTopRated } from './rootStackParamsTopRated.type';

export type RootTabNavigator = {
  TabMovie: RootStackParamsMovie;
  TabTvShow: RootStackTvShowParams;
  TabSearch: RootStackParamsSearch;
  TabTopRated: RootStackParamsTopRated;
}