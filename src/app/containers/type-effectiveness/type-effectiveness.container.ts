import { Component } from "@angular/core";
import { PokemonTypes } from "src/app/data/types";
import { PokemonType } from "src/app/domain";

@Component({
    selector: 'type-effectiveness',
    templateUrl: './type-effectiveness.container.html',
    styleUrls: ['./type-effectiveness.container.scss']
})
export class PokeTypeEffectivenessContainerComponent {
    types: PokemonType[] = PokemonTypes;

    constructor() {
        console.log(this.types[0]);
    }
}