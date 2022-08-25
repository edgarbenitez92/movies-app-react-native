import { useEffect, useState } from "react";
import movieDB from "../api/movieDB";
import { Trailer, TrailerResponse } from '../interfaces/trailerMovie.interface';


export const useMovieTrailer = (movieId: number) => {

  const [isLoading, setIsLoading] = useState(true);
  const [trailerState, setTrailerState] = useState<Trailer[]>();
  const [trailersYoutubeList, setTrailersYoutubeList] = useState<string[]>();

  const getTrailerByIdMovie = async () => {
    const { data } = await movieDB.get<TrailerResponse>(`${movieId}/videos`);

    setTrailerState(data.results);
    setTrailersYoutubeList(getYoutubeKeys(data.results));
    setIsLoading(false);
  }

  const getYoutubeKeys = (movieTrailers: Trailer[]): string[] => {
    let keysArr: string[] = [];
    if (movieTrailers.length) keysArr = movieTrailers.map(trailer => trailer.key);
    return keysArr;
  }

  useEffect(() => {
    getTrailerByIdMovie();
  }, [movieId]);

  return { trailerState, trailersYoutubeList, isLoading };
}
