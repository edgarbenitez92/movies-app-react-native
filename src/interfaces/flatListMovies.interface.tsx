import { Movie } from "./movies.interface";

export interface MoviesState {
  nowPlaying: Movie[];
  popular: Movie[];
  // topRated: Movie[];
  upcoming: Movie[];
}