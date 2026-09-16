const canvas = document.createElement('canvas');
canvas.width = 800;
canvas.height = 500;
canvas.style.border = '2px solid #333';
canvas.style.background = '#f2f2f2';
canvas.style.display = 'block';
canvas.style.margin = '20px auto';

document.body.appendChild(canvas);

const ctx = canvas.getContext('2d');

ctx.fillStyle = '#87CEEB';
ctx.fillRect(0, 0, canvas.width, canvas.height);

ctx.fillStyle = '#ffd700';
ctx.beginPath();
ctx.arc(400, 200, 70, 0, Math.PI * 2);
ctx.fill();

ctx.fillStyle = '#2e8b57';
ctx.fillRect(300, 270, 200, 120);

ctx.fillStyle = '#000';
ctx.font = '30px Arial';
ctx.textAlign = 'center';
ctx.fillText('Canvas', canvas.width / 2, 80);
