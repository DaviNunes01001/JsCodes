// script.js - Forms demo
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
    const msg = document.createElement('p');
    msg.textContent = `Olá, ${input.value || 'visitante'}!`;
    root.appendChild(msg);
  });
});
