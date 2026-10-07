const elephants = [];
let imgs = ["Media/Pegaphant.jpg", "Media/images.webp", "Media/images.jpg"];

function createImg(n) {
  for (let i = 0; i < n; i++) {
    const width = window.innerWidth;
    const height = window.innerHeight;
    const size = 50;

    let src = imgs[Math.floor(Math.random() * imgs.length)];
    const x = Math.floor(Math.random() * (width - size)) + size / 2;
    const y = Math.floor(Math.random() * (height - size)) + size / 2;

    const img = document.createElement("img");
    img.src = src;
    img.className = "pegaClass";
    img.style.position = "absolute"; // Damit left/top wirken
    img.style.left = x + "px";
    img.style.top = y + "px";
    img.style.display = "block";
    document.body.appendChild(img);

    const dx = 6;
    const dy = 6;
    // Zufällige Bewegungsgeschwindigkeit (-3 bis 3 Pixel) für X und Y
    /*wenn man es Random haben möchte die geschwindigkeit
    const dy = (Math.random() - 0.5) * 6;
    */
    elephants.push({
      id: img.id,
      x: x,
      y: y,
      dx: dx,
      dy: dy,
      element: img,
      size: size,
    });
  }
}

function animate() {
  for (const ele of elephants) {
    ele.x += ele.dx;
    ele.y += ele.dy;

    const width = window.innerWidth;
    const height = window.innerHeight;

    if (ele.x <= 0 || ele.x >= width - ele.size) {
      ele.dx = -ele.dx;
      ele.x = Math.max(0, Math.min(width - ele.size, ele.x));
    }

    let x = document.getElementsByClassName("canone");

    if (ele.y <= 0 || ele.y >= 600 - ele.size) {
      ele.dy = -ele.dy;
      ele.y = Math.max(0, Math.min(600 - ele.size, ele.y));
    }

    // Position auf das Bild übertragen
    ele.element.style.left = ele.x + "px";
    ele.element.style.top = ele.y + "px";
  }

  requestAnimationFrame(animate);
}

// Beim Resize des Fensters zumindest sicherstellen, dass Positionsberechnungen aktuell bleiben
window.addEventListener("resize", () => {});

createImg(10);
animate();
