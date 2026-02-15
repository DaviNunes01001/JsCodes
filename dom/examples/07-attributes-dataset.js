// Exemplo 07 - Atributos e data-*
document.addEventListener('DOMContentLoaded', () => {
  const img = document.createElement('img');
  img.src = 'https://via.placeholder.com/100';
  img.alt = 'placeholder';
  img.dataset.source = 'placeholder-service';

  const caption = document.createElement('p');
  caption.textContent = `Source: ${img.dataset.source}`;

  document.body.appendChild(img);
  document.body.appendChild(caption);
});
