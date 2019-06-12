import { Species } from './species.model';
import { Film } from './film.model';

export class Planet {

    constructor(
        private name: string,
        private diameter?: string,
        private rotation_period?: string,
        private orbital_period?: string,
        private gravity?: string,
        private population?: string,
        private climate?: string,
        private terrain?: string,
        private surface_water?: string,
        private residents?: string[],
        private films?: string[],
        private url?: string,
        private created?: string,
        private edited?: string) {}
        
    getName() { return this.name; }
}
