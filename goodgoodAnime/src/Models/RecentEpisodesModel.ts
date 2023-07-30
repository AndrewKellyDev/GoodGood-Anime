export type RecentEpisodesTypes = {
    id: string;
    malId: number;
    title: {
        romaji: string;
        english: string | null;
        native: string;
        userPreferred: string;
    };
    image: string;
    rating: number;
    color: string;
    episodeId: string;
    episodeTitle: string;
    episodeNumber: number;
    genres: string[];
    type: string;
}