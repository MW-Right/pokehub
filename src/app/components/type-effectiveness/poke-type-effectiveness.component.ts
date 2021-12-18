import { Component, Input } from "@angular/core";

@Component({
    selector: 'poke-type-effectiveness',
    templateUrl: './poke-type-effectiveness.component.html',
    styleUrls: ['./poke-type-effectiveness.component.scss']
})
export class PokeTypeEffectivenessComponent {
    @Input() mode: string;
}