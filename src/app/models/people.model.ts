export class People {

    constructor(
        private name: string,
        private birth_year: string,
        private eye_color: string,
        private gender: string,
        private hair_color: string,
        private height: string,
        private mass: string,
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

    getBirhtYear() { return this.birth_year; }

    getEyeColor() { return this.eye_color; }

    getGender() { return this.gender; }

    getHairColor() { return this.hair_color; }

    getHeight() { return this.height; }

    getMass() { return this.mass; }

    getSkinColor() { return this.skin_color; }

    getHomeWorld() { return this.homeworld; }

    getFilms() { return this.films; }

    getSpecies() { return this.species; }

    getStarships() { return this.starships; }

    getVehicles() { return this.vehicles; }


}
