import { Routes } from "@angular/router";
import { PokeBreedingContainerComponent, PokeLandingContainer, PokeNaturesContainerComponent, PokeTypeEffectivenessContainerComponent } from "./containers";

export const routes: Routes = [
    { data: { name: 'Home' }, path: '', component: PokeLandingContainer },
    { data: { name: 'Breeding' }, path: 'breeding', component: PokeBreedingContainerComponent },
    { data: { name: 'Natures' }, path: 'natures', component: PokeNaturesContainerComponent },
    { data: { name: 'Type Effectiveness' }, path: 'type-effectiveness', component: PokeTypeEffectivenessContainerComponent }
];