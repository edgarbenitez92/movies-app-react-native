import { useEffect, useState } from "react";
import movieDB from "../api/movieDB";
import { Cast, CreditsData } from "../interfaces/credits.interface";
import { MovieFullDetail } from "../interfaces/movie.interface";
import { Movie, MovieDB } from "../interfaces/movies.interface";

interface MovieDetails {
  isLoading: boolean;
  movieFullDetails?: MovieFullDetail;
  cast: Cast[];
  similarMovies?: Movie[];
}

export const useMovieDetails = (movieId: number) => {

  const [state, setState] = useState<MovieDetails>({
    isLoading: true,
    movieFullDetails: undefined,
    cast: [],
    similarMovies: undefined
  });

  let { isLoading, movieFullDetails, cast, similarMovies } = state;

  const getMovieDetails = async () => {

    const movieDetailsPromise = movieDB.get<MovieFullDetail>(`/${movieId}`);
    const castPromise = movieDB.get<CreditsData>(`/${movieId}/credits`);
    const similarMoviesPromise = movieDB.get<MovieDB>(`/${movieId}/similar`);

    const [movieDetails, castDetails, similarMoviesDetails] = await Promise.all([
      movieDetailsPromise,
      castPromise,
      similarMoviesPromise
    ]);

    setState({
      isLoading: false,
      movieFullDetails: movieDetails.data,
      cast: castDetails.data.cast,
      similarMovies: similarMoviesDetails.data.results
    })
  }

  useEffect(() => {
    getMovieDetails();
  }, [movieId]);

  return { isLoading, cast, movieFullDetails, similarMovies };
}
