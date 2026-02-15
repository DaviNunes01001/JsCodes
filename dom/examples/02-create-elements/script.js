// script.js - Create elements demo
document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('root');
  const container = document.createElement('div');
  container.id = 'example-create';

  const title = document.createElement('h2');
  title.textContent = 'Frutas geradas dinamicamente';

  const list = document.createElement('ul');
  ['Maçã', 'Banana', 'Cereja'].forEach(text => {
    const li = document.createElement('li');
    li.textContent = text;
    list.appendChild(li);
  });

  container.appendChild(title);
  container.appendChild(list);
  root.appendChild(container);
});
