import { FullAnimeDetails } from "../Models/FullAnimeTypes";

export const defaultAnimeDetails: FullAnimeDetails = {
    id: '',
    title: {
        romaji: '',
        english: '',
        native: '',
    },
    malId: 0,
    synonyms: [],
    isLicensed: false,
    isAdult: false,
    countryOfOrigin: '',
    image: '',
    popularity: 0,
    color: '',
    cover: '',
    description: '',
    status: '',
    releaseDate: 0,
    startDate: {
        year: 0,
        month: 0,
        day: 0,
    },
    endDate: {
        year: null,
        month: null,
        day: null,
    },
    nextAiringEpisode: {
        airingTime: 0,
        timeUntilAiring: 0,
        episode: 0,
    },
    totalEpisodes: 0,
    currentEpisode: 0,
    rating: 0,
    duration: 0,
    genres: [],
    season: '',
    studios: [],
    subOrDub: '',
    type: '',
    recommendations: {
        id: 0,
        malId: 0,
        title: {
            romaji: '',
            english: '',
            native: '',
            userPreferred: '',
        },
        status: '',
        episodes: 0,
        image: '',
        cover: '',
        rating: 0,
        type: '',
    },
    characters: {
        id: 0,
        role: '',
        name: {
            first: '',
            last: '',
            full: '',
            native: '',
            userPreferred: '',
        },
        image: '',
        voiceActors: {
            id: 0,
            language: '',
            name: {
                first: '',
                last: '',
                full: '',
                native: '',
                userPreferred: '',
            },
            image: '',
        },
    },
    relations: {
        id: 0,
        relationType: '',
        malId: 0,
        title: {
            romaji: '',
            english: '',
            native: '',
            userPreferred: '',
        },
        status: '',
        episodes: 0,
        image: '',
        color: '',
        type: '',
        cover: '',
        rating: 0,
    },
    episodes: {
        id: '',
        slug: '',
        description: '',
        number: 0,
        title: '',
        image: '',
        airDate: '',
    },
};