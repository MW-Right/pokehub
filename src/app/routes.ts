import { Routes } from "@angular/router";
import { PokeBreedingContainerComponent, PokeLandingContainer } from "./containers";

export const routes: Routes = [
    { data: { name: 'Home' }, path: '', component: PokeLandingContainer },
    { data: { name: 'Breeding' }, path: 'breeding', component: PokeBreedingContainerComponent }
];