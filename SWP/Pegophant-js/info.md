<!DOCTYPE html>
<html lang="en">
 
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
 
<body>
 
    <img src="Media/Pegaphant.png" alt="Pegaphant" id="id1">
 
    <style>
        body {
            width: 100dvw;
            height: 100dvh;
            display: flex;
        }
 
        img {
            width: 100px;
            height: auto;
            position: absolute;
        }
 
        .pegaClass {
            width: 100px;
            height: auto;
            position: absolute;
        }
    </style>
 
    <script>
 
        let pp_Id = "id1";   //Id
        let pp_positionX = 0;
        let pp_positionY = 0;
        let pp_richtung = 1;    //Richtung(1 = rechts, -1 = links)
        let pp_name = "Niko";   //Name
 
 
        let pp_array = [pp_Id, pp_positionX, pp_positionY, pp_richtung,pp_name];  //Array
        let gesamtPegaListe = [];  //Array mit allen Pegaphanten
 
 
        function createImg(n) {
            for(let i=0; i<n; i++) {
 
            let randomX = parseInt(Math.random()*1000 +1);
           
            let img=document.createElement("img");
            img.src="Media/Pegaphant.png";
            img.className="pegaClass";
            img.style.left = randomX + "px";
            img.id = "id" + n;
            document.body.appendChild(img);
            gesamtPegaListe.push(["id" + n, randomX, 0, 1, pp_name + n]);
            }
 
        }
 
        createImg(10);
 
        function animateXGesamt() {
 
        for(let x = 0; x < gesamtPegaListe.length; x++) {
            const pega = document.getElementById(gesamtPegaListe[x][0]);
 
            gesamtPegaListe[x][1] += 2 * gesamtPegaListe[x][3];
 
            if (gesamtPegaListe[x][1] <= 10) {
                gesamtPegaListe[x][3] = 1;
            }
            else if (gesamtPegaListe[x][1] >= 1000) {
                gesamtPegaListe[x][3] = -1;
            }
 
            pega.style.left = gesamtPegaListe[x][1] + "px";
            }
 
            requestAnimationFrame(animateXGesamt);
        }
 
        animateXGesamt();
 
 
        function animateX() {
 
        const pega = document.getElementById(pp_array[0]);
 
            pp_array[1] += 2 * pp_array[3];
 
            if (pp_array[1] <= 10) {
                pp_array[3] = 1;
            }
            else if (pp_array[1] >= 1000) {
                pp_array[3] = -1;
            }
 
            pega.style.left = pp_array[1] + "px";
 
            requestAnimationFrame(animateX);
        }
 
        //animateX();
 
        function animateY() {
            const pega = document.getElementById(pp_array[0]);
 
            pp_array[2] += 2 * pp_array[3];
 
            if (pp_array[2] <= 10) {
                pp_array[3] = 1;
            }
            else if (pp_array[2] >= 1000) {
                pp_array[3] = -1;
            }
 
            pega.style.top = pp_array[2] + "px";
 
            requestAnimationFrame(animateY);
        }
 
        //animateY();
 
 
 
 
    </script>
 
</body>
 
</html>
 
<!DOCTYPE html>
<html lang="en">
 
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
 
<body>
 
    <img src="Media/Pegaphant.png" alt="Pegaphant" id="pega">
 
    <style>
        body {
            width: 100dvw;
            height: 100dvh;
            display: flex;
        }
         img {
            width: 100px;
            height: auto;
            position: absolute;
            }
           
    </style>
 
    <script>
        const pega = document.getElementById("pega");
 
        let pp_alter = 16;  //Jahre
        let pp_gewicht = 2500;  //Kilogramm
        let pp_groesse = 3.5;   //m
        let pp_farbe = "grau";  //Farbe
        let pp_name = "Niko";   //Name
        let pp_geschlecht = "m";    //Geschlecht
       
        let pp_richtungX = 1;    //Richtung(1 = rechts, -1 = links)
        let pp_richtungY = 1;    //Richtung(1 = oben, -1 = unten)
        let pp_positionX = 0;
        let pp_positionY = 0;
        let pp_geschwindigkeit = 2; //Km/h
 
        const worldWidth = window.innerWidth;
        const worldHeight = window.innerHeight;
 
        function ausgabe () {
            console.log("Alter : " + pp_alter + ", Gewicht : " + pp_gewicht + ", Größe : " + pp_groesse + ", Farbe : " + pp_farbe + ", Geschwindigkeit : " + pp_geschwindigkeit + ", Name : " + pp_name + ", Geschlecht : " + pp_geschlecht);
        }
 
        ausgabe();
 
        function animateX() {
 
            pp_positionX += pp_geschwindigkeit * pp_richtungX;
           
            if (pp_positionX <= 0) {
                pp_richtungX = 1;
            }
            else if (pp_positionX >= worldWidth) {
                pp_richtungX = -1;
            }
 
            pega.style.left = pp_positionX + "px";
 
            requestAnimationFrame(animateX);
        }
 
        animateX();
 
        function animateY() {
 
            pp_positionY += pp_geschwindigkeit * pp_richtungY;
           
            if (pp_positionY <= 0) {
                pp_richtungY = 1;
            }
            else if (pp_positionY >= worldHeight) {
                pp_richtungY = -1;
            }
 
            pega.style.top = pp_positionY + "px";
 
            requestAnimationFrame(animateY);
        }
 
        animateY();
 
        const centerX = 500;  // Mittelpunkt X
        const centerY = 300;  // Mittelpunkt Y
        const radius = 100;   // Radius
        const speed = 0.02;   // Drehgeschwindigkeit
 
        let angle = 0;
 
        function animate() {
            // Winkel erhöhen
            angle += speed;
 
        // Position auf der Kreisbahn berechnen
        let x = centerX + Math.cos(angle) * radius;
        let y = centerY + Math.sin(angle) * radius;
 
        // Position verwenden
        console.log("X:", x, "Y:", y);
 
    requestAnimationFrame(animate);
}
 
animate();
 
 
    </script>
 
</body>
 
</html>
