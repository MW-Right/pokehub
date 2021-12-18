import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { Width100ColumnDirective, Width25ColumnDirective, Width33ColumnDirective, Width50ColumnDirective, Width75ColumnDirective } from './directives';
import { HoverClassDirective } from './directives/hover-class.directive';
import { PokeBreedingContainerComponent, PokeLandingContainer, PokeNaturesContainerComponent, PokeTypeEffectivenessContainerComponent } from './containers';
import { PokemonBreedingFormComponent } from './components/breeding/breeding-form/breeding-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PokeTypeEffectivenessComponent } from './components/type-effectiveness/poke-type-effectiveness.component';

@NgModule({
  declarations: [
    AppComponent,
    PokemonBreedingFormComponent,
    PokeTypeEffectivenessComponent,
    
    PokeBreedingContainerComponent,
    PokeLandingContainer,
    PokeNaturesContainerComponent,
    PokeTypeEffectivenessContainerComponent,

    HoverClassDirective,
    Width25ColumnDirective,
    Width33ColumnDirective,
    Width50ColumnDirective,
    Width75ColumnDirective,
    Width100ColumnDirective,
  ],
  imports: [
    AppRoutingModule,
    BrowserAnimationsModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
