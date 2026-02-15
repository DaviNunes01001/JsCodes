// Exemplo 05 - Manipulação de formulários
document.addEventListener('DOMContentLoaded', () => {
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
  document.body.appendChild(form);

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    alert(`Olá, ${input.value || 'visitante'}!`);
  });
});
