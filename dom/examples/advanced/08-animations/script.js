/*
  Advanced — Animações com requestAnimationFrame
  ----------------------------------
  - `requestAnimationFrame` sincroniza updates com o ciclo de repintura do navegador
    (mais eficiente que `setInterval` para animações visuais).
  - Evite causar layout thrashing: modifique transform/opacity sempre que possível.
  - `cancelAnimationFrame` permite parar uma animação.
  - Use `performance.now()` para medições precisas de tempo.
*/
document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('root');
  const ball = document.createElement('div');
  ball.className = 'ball';
  ball.style.left = '20px';
  root.appendChild(ball);

  let x = 20, dir = 1;
  let rafId = null;

  function loop(){
    // Atualiza posição
    x += dir * 2;
    // Limites baseados na largura da janela para manter a bola visível
    if (x > window.innerWidth - 100 || x < 20) dir *= -1;
    // Atualize transform em vez de left para melhor performance em animações complexas
    ball.style.transform = `translateX(${x}px)`;
    rafId = requestAnimationFrame(loop);
  }

  // Inicia a animação
  rafId = requestAnimationFrame(loop);

  // Exemplo: parar animação após 10s
  setTimeout(() => {
    if (rafId) cancelAnimationFrame(rafId);
    console.log('Animação parada (exemplo)');
  }, 10000);
});
