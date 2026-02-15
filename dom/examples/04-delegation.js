// Exemplo 04 - Delegação de eventos
document.addEventListener('DOMContentLoaded', () => {
  const container = document.createElement('div');
  container.id = 'delegation-container';

  const list = document.createElement('ul');
  for (let i = 1; i <= 5; i++) {
    const li = document.createElement('li');
    li.textContent = `Item ${i}`;
    li.className = 'deleg-item';
    list.appendChild(li);
  }

  container.appendChild(list);
  document.body.appendChild(container);

  // listener no pai
  container.addEventListener('click', (e) => {
    const li = e.target.closest('.deleg-item');
    if (li) alert(`Clicou em ${li.textContent}`);
  });
});
