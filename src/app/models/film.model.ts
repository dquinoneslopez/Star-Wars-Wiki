import { Starship } from './starship.model';
import { Species } from './species.model';
import { Vehicle } from './vehicle.model';
import { People } from './people.model';
import { Planet } from './planet.model';

export class Film {
    
    constructor (
        public title: string,
        public episode_id: string,
        public opening_crawl: string,
        public director: string,
        public producer: string,
        public release_date: Date,
        public species: Species[],
        public starships: Starship[],
        public vehicles: Vehicle[],
        public characters: People[],
        public planets: Planet[],
        public url: string,
        public created: string,
        public edited: string) {}

}
