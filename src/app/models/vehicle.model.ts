export class Vehicle {

    constructor (
        private name: string,
        private model: string,
        private vehicle_class?: string,
        private manufacturer?: string,
        private length?: string,
        private cost_in_credits?: string,
        private crew?: string,
        private passengers?: string,
        private max_atmosphering_speed?: string,
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
