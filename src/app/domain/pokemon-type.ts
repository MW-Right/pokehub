export class PokemonType {
    id: number;
    type: string;
    offensive: Effectiveness[];
    defensive: Effectiveness[];

    constructor(
        id: number,
        type: string,
        defensive: number[],
        offensive: number[]
    ) {
        this.id = id;
        this.type = type;
        
        if (offensive.length !== 18 || defensive.length !== 18) {
            console.error('Error: Input length of powers are incorrect.', [offensive.length, defensive.length]);
        } else {
            this.offensive = this.setPower(offensive);
            this.defensive = this.setPower(defensive);
        }
    }

    private setPower(powers: number[]): Effectiveness[] {
        let result = [];
        for (let i = 0; i < powers.length; i++) {
            result.push(new Effectiveness(i, powers[i]));
        }

        return result;
    }
}

export class Effectiveness {
    id: number;
    pwr: number;

    constructor(id: number, pwr: number) {
        this.id = id;
        this.pwr = pwr;
    }
}