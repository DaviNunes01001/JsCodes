/*
  Intermediate — Delegação de eventos
  ----------------------------------
  - Delegação: anexar um único listener a um elemento pai para tratar
    eventos de muitos filhos (eficiente para listas dinâmicas).
  - `event.target` mostra o elemento real onde o evento ocorreu.
  - `closest(selector)` sobe na árvore até encontrar um ancestor que
    combine com o seletor (útil para detectar itens clicados).
  - Aproveita propagação/bubbling dos eventos.
*/
document.addEventListener('DOMContentLoaded', () => {
  const container = document.getElementById('delegation-container');
  const list = document.createElement('ul');
  for (let i = 1; i <= 5; i++) {
    const li = document.createElement('li');
    li.textContent = `Item ${i}`;
    li.className = 'deleg-item';
    list.appendChild(li);
  }
  container.appendChild(list);

  // listener no pai, que detecta clicks nos filhos
  container.addEventListener('click', (e) => {
    // procuramos o elemento de interesse a partir do alvo do evento
    const li = e.target.closest('.deleg-item');
    if (li) {
      // Podemos usar dataset ou remover/adicionar elementos dinamicamente
      alert(`Clicou em ${li.textContent}`);
    }
  });
});
