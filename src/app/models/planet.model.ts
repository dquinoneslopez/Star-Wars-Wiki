
export class Planet {

    constructor(
        private name: string,
        private diameter?: string,
        private rotationPeriod?: string,
        private orbitalPeriod?: string,
        private gravity?: number,
        private population?: number,
        private climate?: string,
        private terrain?: string,
        private surfaceWater?: number,
        private residents?: string[],
        private films?: string[],
        private url?: string,
        private created?: string,
        private edited?: string) {}

    getName() { return this.name; }

    setName( name: string) { this.name = name; }
}
