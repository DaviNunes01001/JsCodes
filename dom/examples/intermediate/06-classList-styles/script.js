/*
  Intermediate — classList e manipulação de estilos
  ----------------------------------
  - `element.classList` expõe métodos úteis: add, remove, toggle, contains.
  - Evite mexer excessivamente em estilos inline — prefira alternar classes
    e definir estilos via CSS.
  - `classList.toggle('nome', condicao)` permite controlar presença da classe.
*/
document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('root');
  const box = document.createElement('div');
  box.textContent = 'Passe o mouse aqui';
  box.className = 'box';

  box.addEventListener('mouseenter', () => box.classList.add('hover'));
  box.addEventListener('mouseleave', () => box.classList.remove('hover'));

  root.appendChild(box);
});
