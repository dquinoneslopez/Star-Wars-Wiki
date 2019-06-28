export class People {

    constructor(
        private name: string,
        private birth_year: string,
        private eye_color: string,
        private gender: string,
        private hair_color: string,
        private height: number,
        private mass: number,
        private skin_color: string,
        private homeworld: string,
        private films: string[],
        private species: string[],
        private starships: string[],
        private vehicles: string[],
        private url?: string,
        private created?: string,
        private edited?: string) {}

    getName() { return this.name; }

    setName(name: string) { this.name = name; }

    getBirhtYear() { return this.birth_year; }

    setBirthYear(birth_year: string) { this.birth_year = birth_year; }

    getEyeColor() { return this.eye_color; }

    setEyeColor(eyeColor: string) { this.eye_color = eyeColor; }

    getGender() { return this.gender; }

    setGender(gender: string) { this.gender = gender; }

    getHairColor() { return this.hair_color; }

    setHairColor(hairColor: string) { this.hair_color = hairColor; }

    getHeight() { return this.height; }

    setHeight(height: number) { this.height = height; }

    getMass() { return this.mass; }

    setMass(mass: number) { this.mass = mass; }

    getSkinColor() { return this.skin_color; }

    setSkinColor(skinColor: string) { this.skin_color = skinColor; }

    getHomeWorld() { return this.homeworld; }

    setHomeworld(homeworld: string) { this.homeworld = homeworld; }

    getFilms() { return this.films; }

    setFilms(films: string[]) { this.films = films; }

    getSpecies() { return this.species; }

    setSpecies(species: string[]) { this.species = species; }

    getStarships() { return this.starships; }

    setStarships(starships: string[]) { this.starships = starships; }

    getVehicles() { return this.vehicles; }

    setVehicles(vehicles: string[]) { this.vehicles = vehicles; }

}
