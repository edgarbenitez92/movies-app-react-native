import { useEffect, useState } from "react";
import tvShowDB from "../api/tvShowDB";
import { Cast, CreditsData } from "../interfaces/credits.interface";
import { TvShowFullDetails } from "../interfaces/tvShow.interface";
import { TvShow, TvShowDB } from '../interfaces/tvShows.interface';

interface TvShowDetails {
  isLoading: boolean;
  tvShowDetails?: TvShowFullDetails;
  cast: Cast[];
  similarTvShows?: TvShow[];
}

export const useTvShowDetails = (tvShowId: number) => {

  const [state, setState] = useState<TvShowDetails>({
    isLoading: true,
    tvShowDetails: undefined,
    cast: [],
    similarTvShows: undefined
  });

  let { isLoading, tvShowDetails, cast, similarTvShows } = state;

  const getTvShowDetails = async () => {

    const tvShowDetailsPromise = tvShowDB.get<TvShowFullDetails>(`/${tvShowId}`);
    const castPromise = tvShowDB.get<CreditsData>(`/${tvShowId}/credits`);
    const similarTvShowsPromise = tvShowDB.get<TvShowDB>(`/${tvShowId}/similar`);

    const [tvShowDetails, castDetails, similarTvShowsDetails] = await Promise.all([
      tvShowDetailsPromise,
      castPromise,
      similarTvShowsPromise
    ]);

    setState({
      isLoading: false,
      tvShowDetails: tvShowDetails.data,
      cast: castDetails.data.cast,
      similarTvShows: similarTvShowsDetails.data.results
    })
  }

  useEffect(() => {
    getTvShowDetails();
  }, [tvShowId]);

  return { isLoading, cast, tvShowDetails, similarTvShows };
}
