// script.js - Selectors demo
document.addEventListener('DOMContentLoaded', () => {
  const header = document.querySelector('h1');
  const paragraphs = document.querySelectorAll('p');
  const main = document.getElementById('main');
  const items = document.getElementsByClassName('item');

  header.style.fontSize = '24px';
  paragraphs.forEach((p, i) => p.style.color = i % 2 ? '#555' : '#111');
  console.log('Itens encontrados:', items.length);
});
