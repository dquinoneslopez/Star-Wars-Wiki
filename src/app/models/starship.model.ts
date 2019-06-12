export class Starship {

    constructor(
        private name: string,
        private model: string,
        private starship_class?: string,
        private manufacturer?: string,
        private cost_in_credits?: string,
        private length?: string,
        private crew?: string,
        private passengers?: string,
        private max_atmosphering_speed?: string,
        private hyperdrive_rating?: string,
        private MGLT?: string,
        private cargo_capacity?: string,
        private consumables?: string,
        private films?: string[],
        private pilots?: string[],
        private url?: string,
        private created?: string,
        private edited?: string) {}
    
    getName() { return this.name; }
    getModel() { return this.model; }

}
