// Array para armazenar os nomes
let nomes = [];

// Loop para coletar 4 nomes do usuário
for (let i = 0; i < 4; i++){
    // Solicita e armazena cada nome
    let nome = prompt(`Digite o nome ${i + 1}:`);
    nomes.push(nome); // Adiciona o nome ao array
}

// Percorre o array mostrando cada nome com seu número
nomes.forEach(function(nome, index) {
    // Exibe no console e em um alerta o nome e sua posição
    console.log(`Nome ${index + 1}: ${nome}`);
    alert(`Nome ${index + 1}: ${nome}`);
});