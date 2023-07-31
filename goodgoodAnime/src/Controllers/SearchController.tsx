import React from "react";
import { AnimeSearch } from "../Models/SearchTypes";

type ApiResponse = {
    currentPage: string;
    hasNextPage: boolean;
    totalPages: number;
    totalResults: number;
    results: AnimeSearch[];
};

export class SearchController {
    public searchAnime: AnimeSearch[] = [];

    private _setSearchAnime: React.Dispatch<React.SetStateAction<AnimeSearch[]>>;

    constructor(){
        [this.searchAnime , this._setSearchAnime] = React.useState<AnimeSearch[]>([]);
    }

    public async GetSearchAnime(searchTerm: string) : Promise<void> {
        let response = await fetch(`https://anime-api-s.vercel.app/meta/anilist/${searchTerm}`);
        if (response.ok) {
            let data: ApiResponse = await response.json();
            this._setSearchAnime(data.results)
        } else {
            console.error("HTTP-Error: " + response.status);
        }
    }
}