export class Film {

    constructor(
        private title: string,
        private episode_id: number,
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
        private created?: Date,
        private edited?: Date) {}

    getTitle() { return this.title; }

    setTitle(title: string) { this.title = title; }

    getEpisodeId() { return this.episode_id; }

    setEpisodeId(episodeId: number) { this.episode_id = episodeId; }

    getOpeningCrawl() { return this.opening_crawl; }

    setOpeningCrawl(openingCrawl: string) { this.opening_crawl = openingCrawl; }

    getDirector() { return this.director; }

    setDirector(director: string) { this.director = director; }

    getProducer() { return this.producer; }

    setProducer(producer: string) { this.producer = producer; }

    getReleaseDate() { return this.release_date; }

    setReleaseDate(releaseDate: Date) { this.release_date = releaseDate; }

    getSpecies() { return this.species; }

    setSpecies(species: string[]) { this.species = species; }

    getStarships() { return this.starships; }

    setStarships(starships: string[]) { this.starships = starships; }

    getVehicles() { return this.vehicles; }

    setVehicles(vehicles: string[]) { this.vehicles = vehicles; }

    getCharacters() { return this.characters; }

    setCharacters(characters: string[]) { this.characters = characters; }

    getPlanets() { return this.planets; }

    setPlanets(planets: string[]) { this.planets = planets; }

}
