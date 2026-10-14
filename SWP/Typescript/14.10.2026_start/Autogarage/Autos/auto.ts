export class Auto {
  private _marke: string = "";
  private _ps: number = 0;
  private _farbe: string = "";
  

  constructor(marke: string, ps: number, farbe: string) {
    this._marke = marke;
    this._ps = ps;
    this._farbe = farbe;
     
  }
  get marke(): string {
    return this._marke;
  }

  set marke(value: string) {
    this._marke = value;
  }

  get ps(): number {
    return this._ps;
  }

  set ps(value: number) {
    this._ps = value;
  }

  get farbe(): string {
    return this._farbe;
  }

  set farbe(value: string) {
    this._farbe = value;
  }

  printdata() {
    console.log("Auto data:");
    console.log("Marke: " + this.marke);
    console.log("PS: " + this._ps);
    console.log("Farbe: " + this._farbe)
    console.log("--------------------")

  }
}