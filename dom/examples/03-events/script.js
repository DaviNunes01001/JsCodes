// script.js - Events demo
document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('root');
  const btn = document.createElement('button');
  btn.textContent = 'Clique em mim';
  btn.id = 'btn-event';

  btn.addEventListener('click', (e) => {
    const p = document.createElement('p');
    p.textContent = 'Você clicou no botão em: ' + new Date().toLocaleTimeString();
    root.appendChild(p);
  });

  root.appendChild(btn);
});
