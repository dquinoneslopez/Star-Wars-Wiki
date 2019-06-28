
export class Species {

    constructor(
        private name: string,
        private classification?: string,
        private designation?: string,
        private averageHeight?: number,
        private averageLifespan?: number,
        private eyeColors?: string,
        private hairColors?: string,
        private skinColors?: string,
        private language?: string,
        private homeworld?: string,
        private people?: string[],
        private films?: string[],
        private url?: string,
        private created?: Date,
        private edited?: Date) {}

    getName() { return this.name; }

    setName( name: string ) { this.name = name; }
}
