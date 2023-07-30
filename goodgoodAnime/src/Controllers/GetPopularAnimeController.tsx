import React from "react";
import { PopularTypes } from "../Models/PopularAnimesModel";

type ApiResponse = {
    currentPage: string;
    hasNextPage: boolean;
    totalPages: number;
    totalResults: number;
    results: PopularTypes[];
};

export class PopularAnimeController {
    public popularAnime: PopularTypes[] = [];

    private _setpopularAnime: React.Dispatch<React.SetStateAction<PopularTypes[]>>;

    constructor(){
        [this.popularAnime , this._setpopularAnime] = React.useState<PopularTypes[]>([]);

        React.useEffect(() => {
            this.GetPopularAnime()
        },[])
    }


    private async GetPopularAnime() : Promise<void> {
        let response = await fetch('https://anime-api-s.vercel.app/meta/anilist/trending?page=1&perPage=20');
        if (response.ok) {
            let data: ApiResponse = await response.json();
            this._setpopularAnime(data.results)
        } else {
            console.error("HTTP-Error: " + response.status);
        }
    }
    
    
}