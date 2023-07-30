import React from "react";
import { RecentEpisodesTypes } from "../Models/RecentEpisodesModel";

type ApiResponse = {
    currentPage: string;
    hasNextPage: boolean;
    totalPages: number;
    totalResults: number;
    results: RecentEpisodesTypes[];
};

export class RecentEpisodesController {
    public RecentEpisodes: RecentEpisodesTypes[] = [];

    private _setRecentEpisodes: React.Dispatch<React.SetStateAction<RecentEpisodesTypes[]>>;

    constructor(){
        [this.RecentEpisodes , this._setRecentEpisodes] = React.useState<RecentEpisodesTypes[]>([]);

        React.useEffect(() => {
            
        })
    }


    private async GetRecentEpisodes() : Promise<void> {
        let response = await fetch('https://api.consumet.org/meta/anilist/recent-episodes?page=1&perPage=6&provider=gogoanime');
        if (response.ok) {
            let data: ApiResponse = await response.json();
            console.log(data.results);
        } else {
            console.error("HTTP-Error: " + response.status);
        }
    }
    
    
}