// script.js - Attributes & dataset demo
document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('root');
  const img = document.createElement('img');
  img.src = 'https://via.placeholder.com/150';
  img.alt = 'placeholder';
  img.dataset.source = 'placeholder-service';

  const caption = document.createElement('p');
  caption.textContent = `Source: ${img.dataset.source}`;

  root.appendChild(img);
  root.appendChild(caption);
});
