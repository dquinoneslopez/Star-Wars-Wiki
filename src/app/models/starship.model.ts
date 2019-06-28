export class Starship {

    constructor(
        private name: string,
        private model: string,
        private starshipClass?: string,
        private manufacturer?: string,
        private costInCredits?: number,
        private length?: number,
        private crew?: number,
        private passengers?: number,
        private maxAtmospheringSpeed?: number,
        private hyperdriveRating?: number,
        private MGLT?: string,
        private cargoCapacity?: number,
        private consumables?: string,
        private films?: string[],
        private pilots?: string[],
        private url?: string,
        private created?: Date,
        private edited?: Date) {}

    getName() { return this.name; }

    setName( name: string ) { this.name = name; }

    getModel() { return this.model; }

    setModel( model: string) { this.model = model; }

}
