// Exemplo 01 - Seletores básicos
document.addEventListener('DOMContentLoaded', () => {
  // querySelector / querySelectorAll
  const header = document.querySelector('h1');
  const paragraphs = document.querySelectorAll('p');

  // getElementById / getElementsByClassName
  const main = document.getElementById('main') || null;
  const items = document.getElementsByClassName('item');

  console.log('header:', header);
  console.log('paragraphs:', paragraphs.length);
  console.log('main:', main);
  console.log('items (HTMLCollection):', items.length);
});
