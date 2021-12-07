export class PokemonStats {
    hp: number = 0;
    atk: number = 0;
    def: number = 0;
    spAtk: number = 0;
    spDef: number = 0;
    spe: number = 0;

    get total(): number {
        return this.hp + this.atk + this.def + this.spAtk + this.spDef + this.spe;
    }

    setStats(
        hp: number,
        atk: number,
        def: number,
        spAtk: number,
        spDef: number,
        spe: number
    ) {
        this.hp = hp;
        this.atk = atk;
        this.def = def;
        this.spAtk = spAtk;
        this.spDef = spDef;
        this.spe = spe;
    }
}