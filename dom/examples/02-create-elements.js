// Exemplo 02 - Criar e inserir elementos
document.addEventListener('DOMContentLoaded', () => {
  const container = document.createElement('div');
  container.id = 'example-create';

  const title = document.createElement('h2');
  title.textContent = 'Criando elementos dinamicamente';

  const list = document.createElement('ul');
  ['Maçã', 'Banana', 'Cereja'].forEach(text => {
    const li = document.createElement('li');
    li.textContent = text;
    list.appendChild(li);
  });

  container.appendChild(title);
  container.appendChild(list);
  document.body.appendChild(container);
});
