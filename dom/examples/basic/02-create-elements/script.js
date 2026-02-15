/*
  Basic — Criar elementos dinamicamente
  ----------------------------------
  - `document.createElement` cria novos nós do DOM.
  - `textContent` define o texto interno de um nó.
  - `appendChild` / `append` adicionam nós como filhos.
  - Útil para renderizar listas ou conteúdo gerado por dados.

  O exemplo cria uma lista de frutas a partir de um array e a insere no DOM.
*/
document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('root');
  const container = document.createElement('div');
  container.id = 'example-create';

  const title = document.createElement('h2');
  title.textContent = 'Frutas geradas dinamicamente';

  const list = document.createElement('ul');
  // Gerar itens a partir de um array
  ['Maçã', 'Banana', 'Cereja'].forEach(text => {
    const li = document.createElement('li');
    li.textContent = text;
    list.appendChild(li); // anexar cada <li> ao <ul>
  });

  container.appendChild(title);
  container.appendChild(list);
  root.appendChild(container);
});
