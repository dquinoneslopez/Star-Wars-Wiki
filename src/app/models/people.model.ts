import { Film } from './film.model';
import { Species } from './species.model';
import { Starship } from './starship.model';
import { Vehicle } from './vehicle.model';

export class People {

    constructor (
        public name: string,
        public birth_year: string,
        public eye_color: string,
        public gender: string,
        public hair_color: string,
        public height: string,
        public mass: string,
        public skin_color: string,
        public homeworld: string,
        public films: Film[],
        public species: Species[],
        public starships: Starship[],
        public vehicles: Vehicle[],
        public url: string,
        public created: string,
        public edited: string) {}
        
}
