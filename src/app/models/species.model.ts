import { People } from './people.model';
import { Film } from './film.model';

export class Species {

    constructor(
        private name: string,
        private classification?: string,
        private designation?: string,
        private average_height?: string,
        private average_lifespan?: string,
        private eye_colors?: string,
        private hair_colors?: string,
        private skin_colors?: string,
        private language?: string,
        private homeworld?: string,
        private people?: string[],
        private films?: string[],
        private url?: string,
        private created?: string,
        private edited?: string) {}

    getName() { return this.name; }
    
}
