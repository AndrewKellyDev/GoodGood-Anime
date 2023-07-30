export type FullAnimeDetails = {
    id?: string;
    title?: {
      romaji?: string;
      english?: string;
      native?: string;
    };
    malId?: number;
    synonyms?: string[];
    isLicensed?: boolean;
    isAdult?: boolean;
    countryOfOrigin?: string;
    image?: string;
    popularity?: number;
    color?: string;
    cover?: string;
    description?: string;
    status?: string;
    releaseDate?: number;
    startDate?: {
      year?: number;
      month?: number;
      day?: number;
    };
    endDate?: {
      year?: any;
      month?: any;
      day?: any;
    };
    nextAiringEpisode?: {
      airingTime?: number;
      timeUntilAiring?: number;
      episode?: number;
    };
    totalEpisodes?: number;
    currentEpisode?: number;
    rating?: number;
    duration?: number;
    genres?: string[];
    season?: string;
    studios?: string[];
    subOrDub?: string;
    type?: string;
    recommendations?: {
      id?: number;
      malId?: number;
      title?: {
        romaji?: string;
        english?: string;
        native?: string;
        userPreferred?: string;
      };
      status?: string;
      episodes?: number;
      image?: string;
      cover?: string;
      rating?: number;
      type?: string;
    };
    characters?: {
      id?: number;
      role?: string;
      name?: {
        first?: string;
        last?: string;
        full?: string;
        native?: string;
        userPreferred?: string;
      };
      image?: string;
      voiceActors?: {
        id?: number;
        language?: string;
        name?: {
          first?: string;
          last?: string;
          full?: string;
          native?: string;
          userPreferred?: string;
        };
        image?: string;
      };
    };
    relations?: {
      id?: number;
      relationType?: string;
      malId?: number;
      title?: {
        romaji?: string;
        english?: string;
        native?: string;
        userPreferred?: string;
      };
      status?: string;
      episodes?: number;
      image?: string;
      color?: string;
      type?: string;
      cover?: string;
      rating?: number;
    };
    episodes?: {
      id?: string;
      slug?: string;
      description?: string;
      number?: number;
      title?: string;
      image?: string;
      airDate?: string;
    };
  };
  

export type AnimeEpisode = {
    id: string;
    slug: string;
    description: string;
    number: number;
    title: string;
    image: string;
    airDate: string;
  };

  export type recommendations = {
        id: number
        malId: number
        title: {
            romaji: string
            english?: string
            native: string
            userPreferred: string
        }
        status: string
        episodes: number
        image: string
        cover: string
        rating: number
        type: string
  }
  


