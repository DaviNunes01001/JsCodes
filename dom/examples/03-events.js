// Exemplo 03 - Eventos e listeners
document.addEventListener('DOMContentLoaded', () => {
  const btn = document.createElement('button');
  btn.textContent = 'Clique em mim';
  btn.id = 'btn-event';

  btn.addEventListener('click', (e) => {
    alert('Botão clicado!');
    console.log('Evento:', e.type, 'target:', e.target);
  });

  document.body.appendChild(btn);
});
