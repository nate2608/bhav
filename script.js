const message = "Bhavini, you're beautiful — keep smiling ✨";

let i = 0;
function typeText() {
  if (i < message.length) {
    document.getElementById("text").innerHTML += message.charAt(i);
    i++;
    setTimeout(typeText, 90);
  }
}
typeText();

// Stars animation
const canvas = document.getElementById("stars");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let stars = Array.from({ length: 180 }, () => ({
  x: Math.random() * canvas.width,
  y: Math.random() * canvas.height,
  size: Math.random() * 2,
  speed: Math.random() * 0.4
}));

function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  stars.forEach(s => {
    s.y += s.speed;
    if (s.y > canvas.height) s.y = 0;
    ctx.fillStyle = "white";
    ctx.fillRect(s.x, s.y, s.size, s.size);
  });
  requestAnimationFrame(animate);
}
animate();
