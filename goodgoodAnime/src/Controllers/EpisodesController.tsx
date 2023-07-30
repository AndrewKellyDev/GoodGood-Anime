import React from "react";
import { AnimeEpisode, FullAnimeDetails, recommendations } from "../Models/FullAnimeTypes";
import { defaultAnimeDetails } from "../Data/DefaultAnimeDetails";

interface Source {
    url: string;
    isM3U8: boolean;
    quality: string;
  }
  
  interface VideoSourcesData {
    headers: {
      Referer: string;
    };
    sources: Source[];
  }
  


export class EpisodesController {

    public animeFullDetails: FullAnimeDetails;
    public animeEpisodes: AnimeEpisode[] = [];
    public recommendedShows: recommendations[] = [];

    private _setFullDetails: React.Dispatch<React.SetStateAction<FullAnimeDetails>>;
    private _setanimeEpisodes: React.Dispatch<React.SetStateAction<AnimeEpisode[]>>;
    private _setRecommendedShows: React.Dispatch<React.SetStateAction<recommendations[]>>;

    constructor(animeId: string){ // Add the animeId parameter here
        [this.animeFullDetails , this._setFullDetails] = React.useState<FullAnimeDetails>(defaultAnimeDetails);
        [this.animeEpisodes , this._setanimeEpisodes] = React.useState<AnimeEpisode[]>([]);
        [this.recommendedShows , this._setRecommendedShows] = React.useState<recommendations[]>([]);

        React.useEffect(() => {
            console.log('called API')
            this.GetAnimeEpisodes(animeId); // Call the GetAnimeEpisodes function with the provided animeId
        }, [animeId]) // Add animeId to the dependency array to re-fetch episodes when the ID changes
    }

    private async GetAnimeEpisodes(animeId: string): Promise<void> { // Add the animeId parameter here
        let response = await fetch(`https://anime-api-s.vercel.app/meta/anilist/info/${animeId}?provider=enime`); // Use the provided animeId in the URL
        if (response.ok) {
            let data: FullAnimeDetails = await response.json();
            const updatedFullDetails: FullAnimeDetails = {
              id: data.id,
              title: {
                romaji: data.title?.romaji,
                english: data.title?.english,
                native: data.title?.native,
              },
              malId: data.malId,
              synonyms: data.synonyms,
              isLicensed: data.isLicensed,
              isAdult: data.isAdult,
              countryOfOrigin: data.countryOfOrigin,
              image: data.image,
              popularity: data.popularity,
              color: data.color,
              cover: data.cover,
              description: data.description,
              status: data.status,
              releaseDate: data.releaseDate,
              startDate: {
                year: data.startDate?.year,
                month: data.startDate?.month,
                day: data.startDate?.day,
              },
              endDate: {
                year: data.endDate?.year,
                month: data.endDate?.month,
                day: data.endDate?.day,
              },
              nextAiringEpisode: {
                airingTime: data.nextAiringEpisode?.airingTime,
                timeUntilAiring: data.nextAiringEpisode?.timeUntilAiring,
                episode: data.nextAiringEpisode?.episode,
              },
              totalEpisodes: data.totalEpisodes,
              currentEpisode: data.currentEpisode,
              rating: data.rating,
              duration: data.duration,
              genres: data.genres,
              season: data.season,
              studios: data.studios,
              subOrDub: data.subOrDub,
              type: data.type,
              recommendations: {
                id: data.recommendations?.id,
                malId: data.recommendations?.malId,
                title: {
                  romaji: data.recommendations?.title?.romaji,
                  english: data.recommendations?.title?.english,
                  native: data.recommendations?.title?.native,
                  userPreferred: data.recommendations?.title?.userPreferred,
                },
                status: data.recommendations?.status,
                episodes: data.recommendations?.episodes,
                image: data.recommendations?.image,
                cover: data.recommendations?.cover,
                rating: data.recommendations?.rating,
                type: data.recommendations?.type,
              },
              characters: {
                id: data.characters?.id,
                role: data.characters?.role,
                name: {
                  first: data.characters?.name?.first,
                  last: data.characters?.name?.last,
                  full: data.characters?.name?.full,
                  native: data.characters?.name?.native,
                  userPreferred: data.characters?.name?.userPreferred,
                },
                image: data.characters?.image,
                voiceActors: {
                  id: data.characters?.voiceActors?.id,
                  language: data.characters?.voiceActors?.language,
                  name: {
                    first: data.characters?.voiceActors?.name?.first,
                    last: data.characters?.voiceActors?.name?.last,
                    full: data.characters?.voiceActors?.name?.full,
                    native: data.characters?.voiceActors?.name?.native,
                    userPreferred: data.characters?.voiceActors?.name?.userPreferred,
                  },
                  image: data.characters?.voiceActors?.image,
                },
              },
              relations: {
                id: data.relations?.id,
                relationType: data.relations?.relationType,
                malId: data.relations?.malId,
                title: {
                  romaji: data.relations?.title?.romaji,
                  english: data.relations?.title?.english,
                  native: data.relations?.title?.native,
                  userPreferred: data.relations?.title?.userPreferred,
                },
                status: data.relations?.status,
                episodes: data.relations?.episodes,
                image: data.relations?.image,
                color: data.relations?.color,
                type: data.relations?.type,
                cover: data.relations?.cover,
                rating: data.relations?.rating,
              },
              episodes: {
                id: data.episodes?.id,
                slug: data.episodes?.slug,
                description: data.episodes?.description,
                number: data.episodes?.number,
                title: data.episodes?.title,
                image: data.episodes?.image,
                airDate: data.episodes?.airDate,
              },
            };
            
            this._setFullDetails(updatedFullDetails)            
            this._setanimeEpisodes(data.episodes);
            this._setRecommendedShows(data.recommendations);
        } else {
            console.error("HTTP-Error: " + response.status);
        }
    }

    public async GetStreamingLink(episodeID: string): Promise<string | undefined> {
        try {
          const response = await fetch(`https://anime-api-s.vercel.app/anime/enime/watch?episodeId=${episodeID}`);
          
          if (!response.ok) {
            console.error("HTTP-Error: " + response.status);
            return undefined;
          }
      
          const data: VideoSourcesData = await response.json();
          const sources: Source[] = data.sources;
      
          // Find the default source in the sources array
          const defaultSource = sources.find((source) => source.quality === "default");
      
          // If a default source is found, return its URL
          if (defaultSource) {
            return defaultSource.url;
          } else {
            console.error("Default source not found in the response.");
            return undefined;
          }
        } catch (error) {
          console.error("Error occurred while fetching the streaming link:", error);
          return undefined;
        }
      }
}
