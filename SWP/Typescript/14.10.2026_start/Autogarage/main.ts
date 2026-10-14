import { Auto } from "./Autos/auto.ts";

let farbe = ["blue", "grey", "white", "black"];
let austomarken = ["BMW", "Mercedes", "Ferarri", "Lambo", "RR"];

//const auto = new Auto(
//austomarken[Math.floor(Math.random() * austomarken.length)],
//Math.floor(Math.random() * 1000 ) + 50,
// farbe[Math.floor(Math.random() * farbe.length)],

//);

//auto.marke = "bmw";
//auto.ps = 890;


let anzahlAutos = 1000;
const autos: Auto[] = [];
for (let i = 1; i < anzahlAutos; i++) {
    autos.push(
        new Auto(
            austomarken[Math.floor(Math.random() * austomarken.length)],
            Math.floor(Math.random() * 1000) + 50,
            farbe[Math.floor(Math.random() * farbe.length)],
        ),
    );
}

//kurzvariante für FOR schleife
//autos.forEach((auto) => {
//  auto.printdata();
//});

//hier jetzt for schleife
for (let i = 0; i < autos.length; i++) {
    autos[i].printdata();
}
