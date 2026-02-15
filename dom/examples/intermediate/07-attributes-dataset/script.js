/*
  Intermediate — Atributos e `data-*`
  ----------------------------------
  - `element.getAttribute` / `setAttribute` para ler/escrever atributos.
  - `element.dataset` expõe os atributos `data-*` como propriedades camelCase.
  - Útil para armazenar metadados associados a elementos sem poluir o DOM.
*/
document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('root');
  const img = document.createElement('img');
  img.src = 'https://via.placeholder.com/150';
  img.alt = 'placeholder';
  img.dataset.source = 'placeholder-service';

  const caption = document.createElement('p');
  caption.textContent = `Source: ${img.dataset.source} (lido via dataset)`;

  // Também demonstrar getAttribute
  const srcAttr = img.getAttribute('src');
  const info = document.createElement('small');
  info.textContent = ` src attribute: ${srcAttr}`;

  root.appendChild(img);
  root.appendChild(caption);
  root.appendChild(info);
});
