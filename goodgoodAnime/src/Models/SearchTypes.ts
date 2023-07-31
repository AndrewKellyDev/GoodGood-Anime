export type AnimeSearch = {
    id: string;
    malId: string | null;
    title: Title;
    status: string;
    image: string;
    cover: string | null;
    popularity: number;
    description: string | null;
    rating: number | null;
    genres: string[];
    color: string | null;
    totalEpisodes: number | null;
    currentEpisodeCount: number | null;
    type: string;
    releaseDate: number | null;
};

type Title = {
    romaji: string;
    english: string | null;
    native: string;
    userPreferred: string;
};