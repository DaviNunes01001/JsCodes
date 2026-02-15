// script.js - classList/styles demo
document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('root');
  const box = document.createElement('div');
  box.textContent = 'Passe o mouse aqui';
  box.className = 'box';

  box.addEventListener('mouseenter', () => box.classList.add('hover'));
  box.addEventListener('mouseleave', () => box.classList.remove('hover'));

  root.appendChild(box);
});
