import { Auto } from "../Autos/auto.ts";

export class Garage {
    private _name:string;
    private _anzahlPlaetze:BigInt;
    private _autos:Auto[];
    
    constructor (name:string, anzahlPlaetze:bigint){
        this. _anzahlPlaetze = anzahlPlaetze;
        this. _name = name;
        this. _autos = [];
    }
}