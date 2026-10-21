export  class Student{
    private _matrikelnummer: string = "";
    private _note: number = 0;
    private _name: string = "";


    constructor(matrikelnummer:string, note:number, name:string){
        this._matrikelnummer = matrikelnummer;
        this._name = name;
        this._note = note;
    }

    get matrikelnummer():string{
        return this._matrikelnummer;
    }
    
    set matrikelnummer(value: string) {
         this._matrikelnummer = value;
    }


    get note():number{
        return this._note;
    }
    
    set note(value: number) {
         this._number = value;
    }

    get name():string{
        return this._name;
    }
    
    set name(value: string) {
         this._name = value;
    }

    printdata(){
        console.log("Student ")
        console.log("Matrikelnummer: " + this._matrikelnummer)
        console.log("Name: " + this._name)
        console.log("Note: " + this._note)
        console.log("---------------")

    }

}