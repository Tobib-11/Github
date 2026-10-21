import { Student } from "./student.ts"; 

export class uni {
    private _titel: string = "";
    private _regelzeit: number = 0;
    private _abschluss: string = "";
    private _studenten: Student[] = [];

    constructor(titel: string, regelzeit: number, abschluss: string) {
        this._regelzeit = abschluss;
        this._abschluss = abschluss;
        this._title = titel;
    }

    get matrikelnummer(): string {
        return this._matrikelnummer;
    }

    set matrikelnummer(value: string) {
        this._matrikelnummer = value;
    }

    get note(): number {
        return this._note;
    }

    set note(value: number) {
        this._number = value;
    }

    get name(): string {
        return this._name;
    }

    set name(value: string) {
        this._name = value;
    }

    printdata() {
        console.log("Student ");
        console.log("Matrikelnummer: " + this._matrikelnummer);
        console.log("Name: " + this._name);
        console.log("Note: " + this._note);
        console.log("---------------");
    }
}
