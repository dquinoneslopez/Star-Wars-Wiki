import { People } from './people.model';
import { Film } from './film.model';

export class Species {

    constructor (
        public name: string,
        public classification: string,
        public designation: string,
        public average_height: string,
        public average_lifespan: string,
        public eye_colors: string,
        public hair_colors: string,
        public skin_colors: string,
        public language: string,
        public homeworld: string,
        public people: People[],
        public films: Film[],
        public url: string,
        public created: string,
        public edited: string) {}

}
