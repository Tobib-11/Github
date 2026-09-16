console.log("hello");

const worldX = 800;
const worldY = 600;

let pp_alter = 14;
let pp_gewicht = 1200;
let pp_groesse = 3.5;
let pp_farbe = "grau";
let pp_geschlecht = "männlich";
let pp_lebensraum = "Savanne";
let pp_essgewohnheiten = "Pflanzenfresser";
let pp_familienstand = "ledig";
let pp_freunde = ["Elefant", "Giraffe", "Loewe"];
let pp_hobbys = ["Gras fressen", "Wasser trinken", "Spielen"];
let pp_faehigkeiten = ["gut schwimmen", "gut riechen", "gut hoeren"];
let pp_posX = 100;
let pp_posY = 200;
let pp_geschwindigkeit = 0;



function pp_bewegen_rechts () {
    pp_posX += 10;
    pp_posY += 10;
    if (pp_posX > worldX) {
        pp_posX= worldX
    }
    console.log("Der pp bewegt sich nach rechts. Neue Posi: (" + pp_posX + ", " + pp_posY +")");
}
