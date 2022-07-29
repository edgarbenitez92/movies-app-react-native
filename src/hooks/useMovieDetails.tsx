import { useEffect, useState } from "react";
import movieDB from "../api/movieDB";
import { Cast, CreditsData } from "../interfaces/credits.interface";
import { MovieFullDetail } from "../interfaces/movie.interface";

interface MovieDetails {
  isLoading: boolean;
  movieFullDetails?: MovieFullDetail;
  cast: Cast[];
}

export const useMovieDetails = (movieId: number) => {

  const [state, setState] = useState<MovieDetails>({
    isLoading: true,
    movieFullDetails: undefined,
    cast: []
  });

  let { isLoading, movieFullDetails, cast } = state;

  const getMovieDetails = async () => {

    const movieDetailsPromise = movieDB.get<MovieFullDetail>(`/${movieId}`);
    const castPromise = movieDB.get<CreditsData>(`/${movieId}/credits`);

    const [movieDetails, castDetails] = await Promise.all([movieDetailsPromise, castPromise]);

    setState({
      isLoading: false,
      movieFullDetails: movieDetails.data,
      cast: castDetails.data.cast
    })
  }

  useEffect(() => {
    getMovieDetails();
  }, []);

  return { isLoading, cast, movieFullDetails };
}
