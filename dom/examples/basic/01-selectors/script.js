/*
  Basic — Seletores
  ----------------------------------
  - `querySelector` retorna o primeiro elemento que bate com o seletor.
  - `querySelectorAll` retorna um NodeList (iterável) com todos os elementos.
  - `getElementById` e `getElementsByClassName` são métodos mais antigos
    que retornam elementos ou coleções (HTMLCollection).
  - NodeList vs HTMLCollection: NodeList pode ser iterado com forEach;
    HTMLCollection reflete mudanças ao vivo.

  Este script demonstra como selecionar elementos e aplicar estilos/ações.
*/
document.addEventListener('DOMContentLoaded', () => {
  // Seleciona o primeiro <h1>
  const header = document.querySelector('h1');

  // Seleciona todos os parágrafos — retorna NodeList
  const paragraphs = document.querySelectorAll('p');

  // getElementById retorna um único elemento (ou null)
  const main = document.getElementById('main') || null;

  // getElementsByClassName retorna um HTMLCollection (ao vivo)
  const items = document.getElementsByClassName('item');

  // Aplicando estilos simples a partir das seleções
  if (header) header.style.color = '#1a73e8';
  paragraphs.forEach((p, i) => {
    // Alterna cor para demonstrar seleção por índice
    p.style.color = i % 2 ? '#555' : '#111';
  });

  // Mostrar diferenças no console
  console.log('header:', header);
  console.log('paragraphs (NodeList):', paragraphs);
  console.log('main (getElementById):', main);
  console.log('items (HTMLCollection):', items);
});
