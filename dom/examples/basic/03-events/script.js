/*
  Basic — Eventos e listeners
  ----------------------------------
  - `addEventListener` registra um ouvinte para um tipo de evento.
  - Eventos fornecem um objeto `Event` com informações (e.type, e.target).
  - Evitar atribuir handlers inline (HTML) — preferir `addEventListener`.

  Exemplo: cria um botão e adiciona um parágrafo com timestamp a cada clique.
*/
document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('root');
  const btn = document.createElement('button');
  btn.textContent = 'Clique em mim';
  btn.id = 'btn-event';

  // O callback recebe o objeto de evento
  btn.addEventListener('click', (e) => {
    const p = document.createElement('p');
    p.textContent = 'Você clicou no botão em: ' + new Date().toLocaleTimeString();
    root.appendChild(p);
  });

  root.appendChild(btn);
});
