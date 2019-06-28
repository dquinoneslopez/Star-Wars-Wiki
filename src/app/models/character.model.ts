export class Character {

    constructor(
        private name: string,
        private birth_year: string,
        private eye_color: string,
        private gender: string,
        private hair_color: string,
        private height: number,
        private mass: number,
        private skin_color: string,
        private homeworld: string[],
        private films: string[],
        private species: string[],
        private starships: string[],
        private vehicles: string[]) {}

    getName() { return this.name; }

    getBirthYear() { return this.birth_year; }

    getEyeColor() { return this.eye_color; }

    getGender() { return this.gender; }

    getHairColor() { return this.hair_color; }

    getHeight() { return this.height; }

    getMass() { return this.mass; }

    getSkinColor() { return this.skin_color; }

    getHomeworld() { return this.homeworld[0]; }

    getFilms() { return this.films; }

    getSpecies() { return this.species; }

    getStarships() { return this.starships; }

    getVehicles() { return this.vehicles; }

    setName(name: string) { this.name = name; }

    setBirthYear(birthYear: string) { this.birth_year = birthYear; }

    setEyeColor(eyeColor: string) { this.eye_color = eyeColor; }

    setGender(gender: string) { this.gender = gender; }

    setHairColor(hairColor: string) { this.hair_color = hairColor; }

    setHeight(height: number) { this.height = height; }

    setMass(mass: number) { this.mass = mass; }

    setSkinColor(skinColor: string) { this.skin_color = skinColor; }

    setHomeworld(homeworld: string[]) { this.homeworld = homeworld; }

    setFilms(films: string[]) { this.films = films; }

    setSpecies(species: string[]) { this.species = species; }

    setStarships(starships: string[]) { this.starships = starships; }

    setVehicles(vehicles: string[]) { this.vehicles = vehicles; }

}