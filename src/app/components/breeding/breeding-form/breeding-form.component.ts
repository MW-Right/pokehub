import { Component, ViewChild } from "@angular/core";
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from "@angular/forms";
import { MatTable, MatTableDataSource } from "@angular/material/table";
import { PokemonStats } from "src/app/domain";

@Component({
    selector: 'poke-breeding-form',
    templateUrl: './breeding-form.component.html',
    styleUrls: ['./breeding-form.component.scss']
})
export class PokemonBreedingFormComponent {
    form: FormGroup;
    statsList = [
        'HP',
        'Atk',
        'Def',
        'SpAtk',
        'SpDef',
        'Spe'
    ];
    displayedColumns: string[] = ['Name', ...this.statsList];

    private debugWamanPokemonStats = new PokemonStats();
    private debugMalePokemonStats = new PokemonStats();

    @ViewChild('wamanTable', {static:true}) wamanTable: MatTable<any>;
    @ViewChild('maleTable', {static:true}) maleTable: MatTable<any>;

    constructor(private fb: FormBuilder) {
        this.debugMalePokemonStats.setStats(1,1,1,1,1,1);
        this.debugWamanPokemonStats.setStats(2,0,2,0,2,0);
        this.form = this.fb.group({
            malePokemon: new FormArray([this.createNewPokemonGroup(this.debugMalePokemonStats)]),
            wamanPokemon: new FormArray([this.createNewPokemonGroup(this.debugWamanPokemonStats)])
        });
        console.log(this.statsList);
    }

    get malePokemon(): FormArray {
        return this.form.get('malePokemon') as FormArray;
    }

    malePokemonGroupById(id: number): FormGroup {
        return this.malePokemon.get(`malePokemon${id}`) as FormGroup;
    }

    get wamanPokemon(): FormArray {
        return this.form.get('wamanPokemon') as FormArray;
    }

    wamanPokemonGroupById(id: number): FormGroup {
        console.log(this.wamanPokemon.at(id) as FormGroup);
        return this.wamanPokemon.at(id) as FormGroup;
    }

    emptyForm() {
        this.form = new FormGroup({
           malePokemon: new FormGroup({}),
           wamanPokemon: new FormGroup({})
        });
    }

    addPokemon(isWaman: boolean) {
        if (isWaman) {
            this.wamanPokemon.push(this.createNewPokemonGroup(new PokemonStats()));
            this.wamanTable.renderRows();
        } else {
            this.malePokemon.push(this.createNewPokemonGroup( new PokemonStats()));
            this.maleTable.renderRows();
        }
    }

    findBestMatch() {
        // iterate each male with each waman
        this.malePokemon.controls.forEach((male) => {
            const maleStats = male.value;
            let bestMatch: PokemonStats = new PokemonStats();
            this.wamanPokemon.controls.forEach((waman) => {
                const wamanStats = waman.value;
                const maxResult: PokemonStats = new PokemonStats();
                maxResult.setStats(
                    Math.max(maleStats.HP, wamanStats.HP),
                    Math.max(maleStats.Atk, wamanStats.Atk),
                    Math.max(maleStats.Def, wamanStats.Def),
                    Math.max(maleStats.SpAtk, wamanStats.SpAtk),
                    Math.max(maleStats.SpDef, wamanStats.SpDef),
                    Math.max(maleStats.Spe, wamanStats.Spe)
                );

                if (maxResult.total >= bestMatch.total) {
                    bestMatch = maxResult;
                }
            });
            console.log(bestMatch);
            console.log(this.rollIds(5));
        });
        // find best match
        // display results.
    }

    private createNewPokemonGroup(pkStats: PokemonStats): FormGroup {
        return new FormGroup({
            HP: new FormControl(pkStats.hp, [Validators.min(0)]),
            Atk: new FormControl(pkStats.atk, [Validators.min(0)]),
            Def: new FormControl(pkStats.def, [Validators.min(0)]),
            SpAtk: new FormControl(pkStats.spAtk, [Validators.min(0)]),
            SpDef: new FormControl(pkStats.spDef, [Validators.min(0)]),
            Spe: new FormControl(pkStats.spe, [Validators.min(0)])
        });
    }

    private rollIds(numberOfRolls: number) {
        const stats = 'ssssss'.split('');
        const poke1 = 'AAAAAA'.split('');
        const poke2 = 'BBBBBB'.split('');
        for (let i = 0; i < numberOfRolls; i++) {
            const rand = Math.floor(Math.random() * 12);
            if (rand >= 6) {
                stats[rand - 6] = poke2[rand - 6];
            } else {
                stats[rand] = poke1[rand];
            }
        }
        console.log(stats);
    }
}