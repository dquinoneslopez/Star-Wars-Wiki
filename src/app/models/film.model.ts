export class Film {

    constructor(
        private title: string,
        private episode_id: string,
        private opening_crawl: string,
        private director: string,
        private producer: string,
        private release_date: Date,
        private species: string[],
        private starships: string[],
        private vehicles: string[],
        private characters: string[],
        private planets: string[],
        private url?: string,
        private created?: string,
        private edited?: string) {}

    getTitle() { return this.title; }

    getEpisodeId() { return this.episode_id; }

    getOpeningCrawl() { return this.opening_crawl; }

    getDirector() { return this.director; }

    getProducer() { return this.producer; }

    getReleaseDate() { return this.release_date; }

    getSpecies() { return this.species; }

    getStarships() { return this.starships; }

    getVehicles() { return this.vehicles; }

    getCharacters() { return this.characters; }

    getPlanets() { return this.planets; }

}
