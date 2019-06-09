import { Film } from './film.model';
import { People } from './people.model';

export class Starship {

    constructor (
        public name?: string,
        public model?: string,
        public starship_class?: string,
        public manufacturer?: string,
        public cost_in_credits?: string,
        public length?: string,
        public crew?: string,
        public passengers?: string,
        public max_atmosphering_speed?: string,
        public hyperdrive_rating?: string,
        public MGLT?: string,
        public cargo_capacity?: string,
        public consumables?: string,
        public films?: string[],
        public pilots?: string[],
        public url?: string,
        public created?: string,
        public edited?: string) {}

}
