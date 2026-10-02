// Pegophant-Aufgabe: mehrere Elefanten zufällig bewegen innerhalb der Fenstergröße

// Liste aller Elefanten
const gesamtPegaListe = [];

/**
 * Erstellt n Elefanten-Bilder mit zufälliger Startposition innerhalb des Viewports
 * @param {number} n Anzahl der zu erstellenden Elefanten
 */
function createImg(n) {
  for (let i = 0; i < n; i++) {
    // Aktuelle Fenstergröße nutzen
    const worldX = window.innerWidth;
    const worldY = window.innerHeight;
    const elephantSize = 50; // approximative Größe des Elefantenbildes

    // Zufällige Startposition innerhalb des Viewports (mit Abstand zum Rand)
    const randomX =
      Math.floor(Math.random() * (worldX - elephantSize)) + elephantSize / 2;
    const randomY =
      Math.floor(Math.random() * (worldY - elephantSize)) + elephantSize / 2;

    // Bild-Element erzeugen
    const img = document.createElement("img");
    img.src = "Media/Pegaphant.jpg"; // Bild liegt im Media-Ordner neben der HTML-Datei
    img.className = "pegaClass";
    img.style.position = "absolute"; // Damit left/top wirken
    img.style.left = randomX + "px";
    img.style.top = randomY + "px";
    img.style.display = "block"; // sicherstellen, dass es sichtbar ist

    document.body.appendChild(img);

    const dx = 6; 
    const dy = 6;

    // Zufällige Bewegungsgeschwindigkeit (-3 bis 3 Pixel) für X und Y
    /*wenn man es Random haben möchte die geschwindigkeit
    const dy = (Math.random() - 0.5) * 6;
*/

    // Daten des Elefanten speichern
    gesamtPegaListe.push({
      id: img.id,
      x: randomX,
      y: randomY,
      dx: dx,
      dy: dy,
      element: img,
      size: elephantSize,
    });
  }
}

/**
 * Animationsloop: bewegt alle Elefanten und lässt sie an den FensterRändern abprallen
 */
function animate() {
  for (const p of gesamtPegaListe) {
    // Position aktualisieren
    p.x += p.dx;
    p.y += p.dy;

    // Aktuelle Fenstergröße (bei Resize aktualisieren)
    const worldX = window.innerWidth;
    const worldY = window.innerHeight;

    // Abprallen an den Rändern
    if (p.x <= 0 || p.x >= worldX - p.size) {
      p.dx = -p.dx;
      // Sicherstellen, dass wir innerhalb bleiben
      p.x = Math.max(0, Math.min(worldX - p.size, p.x));
    }
    if (p.y <= 0 || p.y >= worldY - p.size) {
      p.dy = -p.dy;
      p.y = Math.max(0, Math.min(worldY - p.size, p.y));
    }

    // Position auf das Bild übertragen
    p.element.style.left = p.x + "px";
    p.element.style.top = p.y + "px";
  }

  // Nächste Frame anfragen
  requestAnimationFrame(animate);
}

// Beim Resize des Fensters zumindest sicherstellen, dass Positionsberechnungen aktuell bleiben
window.addEventListener("resize", () => {
  // Position kann hier angepasst werden, aber für Einfachheit ignorieren wir es,
  // da die Abpralllogik die neue Größe beim nächsten Frame verwendet.
});

// 10 Elefanten erzeugen und Animation starten
createImg(10);
animate();
