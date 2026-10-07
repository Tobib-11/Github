let p_id = "pegaphant";
let p_posx = 0;
let p_posy = 0;
let p_direction = 1;
let p_name = "PEGAPHANT";
 
let pegaarray = [p_id, p_posx, p_posy, p_direction,];
let bilder = ["Media/bumbum.png", "Media/explosion.jpg", "Media/explosiongif.webp", "Media/images.jpg", "Media/images.webp"];
 
const elephant = document.getElementById('pegaphant_img');
let gesamtPegaListe = [];

function getSafeY() {
    const shipElem = document.getElementById('pegaphant_img');
    if (!shipElem) return Math.floor(Math.random() * 700) + 1;
    const shipY = shipElem.offsetTop;
    let y;
    do {
        y = Math.floor(Math.random() * 700) + 1;
    } while (Math.abs(y - shipY) < 50); // keep at least 50px away
    return y;
}
 
function createImg(n) {
    for (let x = 0; x < n; x++) {
 
        let random_x = Math.floor(Math.random() * 1000) + 1;
        let random_y = getSafeY();
 
        // zufällige Richtung: -1, 0 oder 1
        let random_dir_x = Math.floor(Math.random() * 3) - 1;
        let random_dir_y = Math.floor(Math.random() * 3) - 1;
 
        // verhindern, dass beide 0 sind
        // sonst würde der Pegaphant einfach stehen
        if (random_dir_x == 0 && random_dir_y == 0) {
            random_dir_x = 1;
        }
 
        let img = document.createElement("img");
 
        img.src = bilder[Math.floor(Math.random() * bilder.length)];
        img.className = "pegaclass";
 
        img.style.left = random_x + "px";
        img.style.top = random_y + "px";
 
        img.id = "id" + x;
 
        document.body.appendChild(img);
 
        // ID, X, Y, Richtung X, Richtung Y, Name
        gesamtPegaListe.push([
            "id" + x,
            random_x,
            random_y,
            random_dir_x,
            random_dir_y,
            "pegaFant" + x
        ]);
    }
}
 
createImg(30);
 
 
function animatearrayGesamt() {
 
    for (let x = 0; x < gesamtPegaListe.length; x++) {
        let id = gesamtPegaListe[x][0];
        let bild_x = gesamtPegaListe[x][1];
        let bild_y = gesamtPegaListe[x][2];
 
        let bild_dir_x = gesamtPegaListe[x][3];
        let bild_dir_y = gesamtPegaListe[x][4];
 
        const elephant = document.getElementById(id);
 
 
        // Bewegung
        bild_x += bild_dir_x * 2;
        bild_y += bild_dir_y * 2;
 
        // rechter / linker Rand
        if (bild_x >= 1000) {
            bild_dir_x = -1;
        }
 
        if (bild_x <= 0) {
            bild_dir_x = 1;
        }
 
 
        // unterer / oberer Rand
        if (bild_y >= 700) {
            bild_dir_y = -1;
        }
 
        if (bild_y <= 0) {
            bild_dir_y = 1;
        }
 
 
        // neue Werte speichern
        gesamtPegaListe[x][1] = bild_x;
        gesamtPegaListe[x][2] = bild_y;
 
        gesamtPegaListe[x][3] = bild_dir_x;
        gesamtPegaListe[x][4] = bild_dir_y;
 
 
        // Bild bewegen
        elephant.style.left = bild_x + "px";
        elephant.style.top = bild_y + "px";
    }
 
    requestAnimationFrame(animatearrayGesamt);
}
 
animatearrayGesamt();
 
 