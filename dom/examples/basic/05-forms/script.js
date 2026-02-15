/*
  Basic — Manipulação de formulários
  ----------------------------------
  - Interceptar `submit` para prevenir envio padrão com `e.preventDefault()`.
  - Ler valores de campos via `input.value`.
  - Mostrar mensagens de validação ou resultados no DOM.

  Este exemplo demonstra validação simples e resposta em tela.
*/
document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('root');
  const form = document.createElement('form');
  form.id = 'example-form';

  const input = document.createElement('input');
  input.name = 'nome';
  input.placeholder = 'Seu nome';

  const submit = document.createElement('button');
  submit.type = 'submit';
  submit.textContent = 'Enviar';

  form.appendChild(input);
  form.appendChild(submit);
  root.appendChild(form);

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    // validação simples
    const value = input.value.trim();
    const msg = document.createElement('p');
    msg.textContent = value ? `Olá, ${value}!` : 'Por favor, informe seu nome.';
    root.appendChild(msg);
  });
});
