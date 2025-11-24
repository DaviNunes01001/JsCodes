// Array para armazenar os números digitados pelo usuário
let n = [];

// Loop para solicitar 5 números ao usuário
for (let i = 0; i < 5; i++) {
  // Converte a entrada do usuário para número e armazena
  let nu = Number(prompt(`Digite um número:`));
  n.push(nu); // Adiciona o número ao array
}

// Para cada número no array, mostra o valor original e seu dobro
n.forEach(function(nu) {
  // Exibe no console e em um alerta o número antes e depois de dobrar
  console.log(`numero antes ${nu} numero depois ${nu * 2}\n`);
  alert(`numero antes ${nu} numero depois ${nu * 2}\n`);
});
