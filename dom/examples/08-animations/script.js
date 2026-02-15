// script.js - Animations demo
document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('root');
  const ball = document.createElement('div');
  ball.className = 'ball';
  ball.style.left = '20px';
  root.appendChild(ball);

  let x = 20, dir = 1;
  function loop(){
    x += dir * 2;
    if (x > window.innerWidth - 100 || x < 20) dir *= -1;
    ball.style.left = x + 'px';
    requestAnimationFrame(loop);
  }
  requestAnimationFrame(loop);
});
