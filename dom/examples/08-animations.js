// Exemplo 08 - Animações simples com requestAnimationFrame
document.addEventListener('DOMContentLoaded', () => {
  const ball = document.createElement('div');
  Object.assign(ball.style, {
    width: '40px',
    height: '40px',
    borderRadius: '50%',
    background: '#4CAF50',
    position: 'fixed',
    left: '20px',
    top: '20px'
  });

  document.body.appendChild(ball);

  let x = 20, dir = 1;
  function loop(){
    x += dir * 2;
    if (x > window.innerWidth - 60 || x < 20) dir *= -1;
    ball.style.left = x + 'px';
    requestAnimationFrame(loop);
  }
  requestAnimationFrame(loop);
});
