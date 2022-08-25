import { TvShow } from "./tvShow.interface";

export interface TvShowsState {
  airingToday: TvShow[];
  onTheAir: TvShow[];
  popular: TvShow[];
}