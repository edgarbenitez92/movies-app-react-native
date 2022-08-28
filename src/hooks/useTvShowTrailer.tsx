import { useEffect, useState } from "react";
import tvShowDB from "../api/tvShowDB";
import { Trailer, TrailerResponse } from '../interfaces/trailerMovie.interface';

export const useTvShowTrailer = (tvShowId: number) => {

  const [isLoading, setIsLoading] = useState(true);
  const [trailerState, setTrailerState] = useState<Trailer[]>();
  const [trailersYoutubeList, setTrailersYoutubeList] = useState<string[]>();

  const getTrailerByTvShowId = async () => {
    const { data } = await tvShowDB.get<TrailerResponse>(`${tvShowId}/videos`);

    setTrailerState(data.results);
    setTrailersYoutubeList(getYoutubeKeys(data.results));
    setIsLoading(false);
  }

  const getYoutubeKeys = (tvShowTrailers: Trailer[]): string[] => {
    let keysArr: string[] = [];
    if (tvShowTrailers.length) keysArr = tvShowTrailers.map(trailer => trailer.key);
    return keysArr;
  }

  useEffect(() => {
    getTrailerByTvShowId();
  }, []);

  return { trailerState, trailersYoutubeList, isLoading };
}
