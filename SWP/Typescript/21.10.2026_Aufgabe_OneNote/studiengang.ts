import { Student } from "./student.ts"; 

export class uni {
    private _titel: string = "";
    private _regelzeit: number = 0;
    private _abschluss: string = "";
    private _studenten: Student[] = [];

    constructor(titel: string, regelzeit: number, abschluss: string) {
        this._regelzeit = regelzeit;
        this._abschluss = abschluss;
        this._titel = titel;
    }

    get regelzeit(): number {
        return this._regelzeit;
    }

    set regelzeit(value: number) {
        this._regelzeit = value;
    }

    get titel(): string {
        return this._titel;
    }

    set titel(value: string) {
        this._titel = value;
    }

    get abschluss(): string {
        return this._abschluss;
    }

    set abschluss(value: string) {
        this._abschluss = value;
    }

    printdata() {
        console.log("Student ");
        console.log("Titel: " + this._titel);
        console.log("Regelzeit: " + this._regelzeit);
        console.log("Abschluss: " + this._abschluss);
        console.log("---------------");
    }
}
