// Exemplo 06 - classList e estilos
document.addEventListener('DOMContentLoaded', () => {
  const box = document.createElement('div');
  box.textContent = 'Passe o mouse aqui';
  box.style.padding = '20px';
  box.style.border = '1px solid #333';
  box.style.display = 'inline-block';

  box.addEventListener('mouseenter', () => box.classList.add('hover'));
  box.addEventListener('mouseleave', () => box.classList.remove('hover'));

  const style = document.createElement('style');
  style.textContent = '.hover{ background:#ffd; transform: scale(1.02);}';
  document.head.appendChild(style);

  document.body.appendChild(box);
});
