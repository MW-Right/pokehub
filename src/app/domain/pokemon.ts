import { PokemonStats } from "./pokemon-stats";

export enum Sex {
    Male = 'male',
    Female = 'Female',
    Unknown = 'unknown'
}

export class Pokemon {
    id: number;
    name: string;
    species: string;
    sex: Sex;
    
    stats: PokemonStats;
    ivs: PokemonStats;
    evs: PokemonStats;

    nature: string;
    ability: string;
    
    originalTrainer: string;
    shiny: boolean;

    constructor(
        id: number,
        name: string,
        species: string,
        sex: string,
        originalTrainer: string,
        nature: string,
        ability: string,
        stats: PokemonStats,
        ivs: PokemonStats,
        evs: PokemonStats,
        shiny: boolean
    ) {
        this.id = id;
        this.name = name;
        this.species = species;
        this.sex = sex as Sex;

        this.stats = stats;
        this.ivs = ivs;
        this.evs = evs;
        
        this.nature = nature;
        this.ability = ability;
        
        this.originalTrainer = originalTrainer;
        this.shiny = shiny;
    }
}